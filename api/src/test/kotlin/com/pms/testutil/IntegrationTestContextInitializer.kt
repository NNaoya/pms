package com.pms.testutil

import com.pms.testutil.database.TestDatabaseContainer
import org.springframework.boot.test.util.TestPropertyValues
import org.springframework.context.ApplicationContextInitializer
import org.springframework.context.ConfigurableApplicationContext

class IntegrationTestContextInitializer : ApplicationContextInitializer<ConfigurableApplicationContext> {
    companion object {
        private const val MYSQL_DATABASE = "test"
        private const val MYSQL_USERNAME = "test"
        private const val MYSQL_PASSWORD = "test"
        val MYSQL_CONTAINER: TestDatabaseContainer = TestDatabaseContainer()
            .withDatabaseName(MYSQL_DATABASE)
            .withUsername(MYSQL_USERNAME)
            .withPassword(MYSQL_PASSWORD)
            .withReuse(true)
            .withEnv("TZ", "Asia/Tokyo")

        init {
            MYSQL_CONTAINER.start()
        }
    }

    override fun initialize(configurableApplicationContext: ConfigurableApplicationContext) {
        TestPropertyValues.of(
            "spring.datasource.url=${MYSQL_CONTAINER.jdbcUrl}",
            "spring.datasource.username=$MYSQL_USERNAME",
            "spring.datasource.password=$MYSQL_PASSWORD"
        ).applyTo(configurableApplicationContext.environment)
    }
}