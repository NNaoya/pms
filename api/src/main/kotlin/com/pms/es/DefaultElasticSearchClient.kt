package com.pms.es

import org.elasticsearch.action.admin.indices.delete.DeleteIndexRequest
import org.elasticsearch.action.bulk.BulkRequest
import org.elasticsearch.action.delete.DeleteRequest
import org.elasticsearch.action.index.IndexRequest
import org.elasticsearch.action.search.SearchRequest
import org.elasticsearch.action.search.SearchResponse
import org.elasticsearch.client.Request
import org.elasticsearch.client.RequestOptions.DEFAULT
import org.elasticsearch.client.RestHighLevelClient
import org.springframework.stereotype.Service

@Service
class DefaultElasticSearchClient(
    private val restClient: RestHighLevelClient
) : ElasticSearchClient {
    override fun performRequest(request: Request) {
        restClient.lowLevelClient.performRequest(request)
    }

    override fun deleteIndex(request: DeleteIndexRequest) {
        restClient.indices().delete(request, DEFAULT)
    }

    override fun bulk(request: BulkRequest) {
        restClient.bulk(request, DEFAULT)
    }

    override fun index(request: IndexRequest) {
        restClient.index(request, DEFAULT)
    }

    override fun delete(request: DeleteRequest) {
        restClient.delete(request, DEFAULT)
    }

    override fun search(request: SearchRequest): SearchResponse =
        restClient.search(request, DEFAULT)
}