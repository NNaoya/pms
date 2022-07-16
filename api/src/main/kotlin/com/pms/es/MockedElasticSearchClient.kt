package com.pms.es

import org.elasticsearch.action.admin.indices.delete.DeleteIndexRequest
import org.elasticsearch.action.bulk.BulkRequest
import org.elasticsearch.action.delete.DeleteRequest
import org.elasticsearch.action.index.IndexRequest
import org.elasticsearch.action.search.SearchRequest
import org.elasticsearch.client.Request
import java.sql.DriverManager.println


class MockedElasticSearchClient {
    fun performRequest(request: Request) {
        println("performRequest")
    }

    fun deleteIndex(request: DeleteIndexRequest) {
        println("deleteIndex")
    }

    fun bulk(request: BulkRequest) {
        println("bulk")
    }

    fun index(request: IndexRequest) {
        println("index")
    }

    fun delete(request: DeleteRequest) {
        println("delete")
    }

    fun search(request: SearchRequest) {
        println("search")
    }
}