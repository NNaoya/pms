# Elasticsearchが公式で配布しているコンテナイメージ
FROM docker.elastic.co/elasticsearch/elasticsearch:7.8.1

# analysis-sudachiのプラグインのインストール
# SudachiDictをダウンロード
RUN elasticsearch-plugin install https://github.com/WorksApplications/elasticsearch-sudachi/releases/download/v7.8.1-2.0.3/analysis-sudachi-7.8.1-2.0.3.zip && \
  curl -Lo sudachi-dictionary-20200722-core.zip http://sudachi.s3-website-ap-northeast-1.amazonaws.com/sudachidict/sudachi-dictionary-20200722-core.zip && \
  unzip sudachi-dictionary-20200722-core.zip && \
  mkdir -p /usr/share/elasticsearch/config/sudachi && \
  cp sudachi-dictionary-20200722/system_core.dic /usr/share/elasticsearch/config/sudachi/system_core.dic

# ICU プラグインのインストール（日本語検索用）
RUN bin/elasticsearch-plugin install analysis-icu
