import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    id("org.springframework.boot") version "2.4.4"
    id("io.spring.dependency-management") version "1.0.11.RELEASE"
    id("org.flywaydb.flyway") version "8.0.5"
    kotlin("jvm") version "1.5.10"
    kotlin("plugin.spring") version "1.5.10"
}

group = "com"
version = "0.0.1-SNAPSHOT"

repositories {
    mavenCentral()
    jcenter()
}

dependencies {
    val implementation by configurations
    val developmentOnly by configurations
    val runtimeOnly by configurations
    val testRuntimeOnly by configurations
    val testImplementation by configurations
    val annotationProcessor by configurations
    implementation("org.jetbrains.kotlin:kotlin-stdlib:1.5.10")
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("org.flywaydb:flyway-core")
    implementation("org.jetbrains.exposed:exposed-spring-boot-starter:0.29.1")
    implementation("org.jetbrains.exposed:exposed-java-time:0.29.1")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.elasticsearch:elasticsearch:7.8.1")
    implementation("org.elasticsearch.client:elasticsearch-rest-client:7.8.1")
    implementation("org.elasticsearch.client:elasticsearch-rest-high-level-client:7.8.1")
    annotationProcessor("org.springframework.boot:spring-boot-configuration-processor:2.4.4")
    developmentOnly("org.springframework.boot:spring-boot-devtools")
    runtimeOnly("mysql:mysql-connector-java:8.0.23")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.5.2")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine:5.5.2")
    testImplementation("org.testcontainers:junit-jupiter:1.15.2") {
        exclude(module = "junit")
    }
    testImplementation("org.testcontainers:mysql:1.15.2")
}

tasks.withType<KotlinCompile> {
    kotlinOptions {
        jvmTarget = "16"
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}