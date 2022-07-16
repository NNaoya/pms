package com.pms.es

import org.elasticsearch.action.admin.indices.delete.DeleteIndexRequest
import org.elasticsearch.action.bulk.BulkRequest
import org.elasticsearch.action.delete.DeleteRequest
import org.elasticsearch.action.index.IndexRequest
import org.elasticsearch.action.search.SearchRequest
import org.elasticsearch.action.search.SearchResponse
import org.elasticsearch.client.Request
import org.springframework.stereotype.Service

@Service
interface ElasticSearchClient {
    fun performRequest(request: Request)

    fun deleteIndex(request: DeleteIndexRequest)

    fun bulk(request: BulkRequest)

    fun index(request: IndexRequest)

    fun delete(request: DeleteRequest)

    fun search(request: SearchRequest): SearchResponse
}