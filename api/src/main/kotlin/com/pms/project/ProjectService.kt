package com.pms.project

import com.pms.es.DefaultElasticSearchClient
import org.elasticsearch.action.admin.indices.delete.DeleteIndexRequest
import org.elasticsearch.action.index.IndexRequest
import org.elasticsearch.common.xcontent.XContentType
import org.elasticsearch.index.Index
import org.springframework.stereotype.Service
import java.util.ArrayList

@Service
class ProjectService(
    private val projectRepository: ProjectRepository,
    private val elasticSearchClient: DefaultElasticSearchClient
) {
    /**
     * プロジェクトの全件取得処理
     */
    fun select(): ArrayList<ProjectResource?> {
        return projectRepository.selectAll()
    }

    /**
     * プロジェクトの詳細取得処理
     */
    fun selectById(id: Int): ArrayList<ProjectResource?> {
        return projectRepository.selectById(id)
    }

    /**
     * プロジェクトの作成処理
     */
    fun create(project: ProjectResource) {
        val id = projectRepository.create(project)

        // Elastic Search登録
        val index = IndexRequest("project-index-$id")
                .id(id.toString())
                .source(project, XContentType.JSON);
        elasticSearchClient.index(index)
    }

    /**
     * プロジェクトの更新処理
     */
    fun updateById(
            id: Int,
            project: ProjectResource
    ) {
        projectRepository.updateById(id, project)

        // Elastic Search更新
        elasticSearchClient.deleteIndex(DeleteIndexRequest("project-index-$id"))
        val index = IndexRequest("project-index-$id")
                .id(id.toString())
                .source(project, XContentType.JSON);
        elasticSearchClient.index(index)
    }
}