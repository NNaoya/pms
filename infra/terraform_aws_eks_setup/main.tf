terraform {
  required_version = "~> 1.0.8"

  # 実行するProviderの条件
  required_providers {
    aws       = {
      source  = "hashicorp/aws"
      version = "~> 3.71.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "2.5.0"
    }
  }
}

provider "aws" {}

module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "mz-eks-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["ap-northeast-1a", "ap-northeast-1c", "ap-northeast-1d"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]

  enable_nat_gateway = true
  single_nat_gateway = true
  enable_vpn_gateway = false
}

module "eks" {
  source                  = "terraform-aws-modules/eks/aws"
  version                 = "18.0.5"
  cluster_version         = "1.21"
  cluster_name            = "mz-k8s"
  vpc_id                  = module.vpc.vpc_id
  subnet_ids              = module.vpc.private_subnets
  enable_irsa             = true
  eks_managed_node_groups = {
    mz_node = {
      desired_size = 2
      instance_types   = ["m5.large"]
    }
  }
  # デフォルトのSecurityGroupでは動作しないため以下を追加
  node_security_group_additional_rules = {
    # AdmissionWebhookが動作しないので追加指定
    admission_webhook = {
      description = "Admission Webhook"
      protocol    = "tcp"
      from_port   = 0
      to_port     = 65535
      type        = "ingress"
      source_cluster_security_group = true
    }
    # Node間通信を許可
    ingress_node_communications = {
      description = "Ingress Node to node"
      protocol    = "tcp"
      from_port   = 0
      to_port     = 65535
      type        = "ingress"
      self        = true
    }
    egress_node_communications = {
      description = "Egress Node to node"
      protocol    = "tcp"
      from_port   = 0
      to_port     = 65535
      type        = "egress"
      self        = true
    }
  }
}

output "aws_auth_config_map" {
  value = module.eks.aws_auth_configmap_yaml
}

# EKSクラスタリソースを参照
data "aws_eks_cluster" "eks" {
  name = module.eks.cluster_id
}

data "aws_eks_cluster_auth" "eks" {
  name = module.eks.cluster_id
}

provider "kubernetes" {
  host                   = data.aws_eks_cluster.eks.endpoint
  cluster_ca_certificate = base64decode(data.aws_eks_cluster.eks.certificate_authority[0].data)
  token                  = data.aws_eks_cluster_auth.eks.token
}