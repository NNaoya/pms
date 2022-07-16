package com.pms.project

import com.pms.exposed.toProjectEntity
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.stereotype.Repository
import java.time.Instant
import java.util.*

@Repository
class ProjectRepository {
    /**
     * プロジェクト全件検索処理
     */
    fun selectAll(): ArrayList<ProjectResource?> = transaction {
        val result = Projects.selectAll()

        val projectList: ArrayList<ProjectResource?> = ArrayList()

        for (project in result) {
            projectList.add(ProjectResource.from(project.toProjectEntity()))
        }

        return@transaction projectList
    }

    /**
     * プロジェクトのIDによる検索処理
     */
    fun selectById(id: Int): ArrayList<ProjectResource?> = transaction {
        val result = Projects.select { Projects.id eq id }
        val projectList: ArrayList<ProjectResource?> = ArrayList()

        for (project in result) {
            projectList.add(ProjectResource.from(project.toProjectEntity()))
        }

        return@transaction projectList
    }

    /**
     * プロジェクト作成
     */
    fun create(
        project: ProjectResource
    ) = transaction {
        return@transaction Projects.insertAndGetId {
            it[name] = project.name
            it[client] = project.client
            it[description] = project.description
            it[amount] = project.amount
            it[startAt] = Instant.parse(project.startAt)
            it[endAt] = Instant.parse(project.endAt)
            it[isDeleted] = 0
            it[createdAt] = Instant.now()
            it[updatedAt] = Instant.now()
        }
    }

    /**
     * プロジェクト更新
     */
    fun updateById(
            id: Int,
            project: ProjectResource
    ) = transaction {
        Projects.update( {Projects.id eq id} ) {
            it[name] = project.name
            it[client] = project.client
            it[description] = project.description
            it[amount] = project.amount
            it[startAt] = Instant.parse(project.startAt)
            it[endAt] = Instant.parse(project.endAt)
            it[updatedAt] = Instant.now()
        }
    }
}

