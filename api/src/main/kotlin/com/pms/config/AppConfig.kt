package com.pms.config

import com.pms.es.DefaultElasticSearchClient
import com.pms.es.MockedElasticSearchClient
import org.elasticsearch.client.RestHighLevelClient
import org.springframework.boot.jackson.JsonComponentModule
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.env.Environment
import org.springframework.web.servlet.config.annotation.CorsRegistry

import org.springframework.web.servlet.config.annotation.WebMvcConfigurer




@Configuration
class AppConfig(
        private val jsonComponentModule: JsonComponentModule,
        private val environment: Environment
) {
    lateinit var webUrl: String
    lateinit var apiUrl: String
    var mockElasticSearch: Boolean = false

    @Bean
    fun corsConfigurer(): WebMvcConfigurer? {
        return object : WebMvcConfigurer {
            override fun addCorsMappings(registry: CorsRegistry) {
                val url: String = environment.getProperty("allowed.url")
                registry.addMapping("/**")
                        .allowedOrigins(url)
                        .allowCredentials(true)
            }
        }
    }

    @Bean
    fun elasticSearchClient(restClient: RestHighLevelClient) = if (mockElasticSearch) {
        MockedElasticSearchClient()
    } else {
        DefaultElasticSearchClient(restClient)
    }
}