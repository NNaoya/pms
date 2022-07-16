package com.pms.project

import java.time.Instant

data class ProjectResource(
    val id: Int,
    val name: String?,
    val client: String?,
    val description: String?,
    val amount: Int?,
    val startAt: String?,
    val endAt: String?,
    val isDeleted: Int?,
    val createdAt: Instant?,
    val updatedAt: Instant?
) {
    companion object {
        fun from(project: ProjectEntity) = ProjectResource(
            project.id,
            project.name,
            project.client,
            project.description,
            project.amount,
            project.startAt.toString(),
            project.endAt.toString(),
            project.isDeleted,
            project.createdAt,
            project.updatedAt
        )
    }

}
