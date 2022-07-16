package com.pms.exposed

import com.pms.project.ProjectEntity
import com.pms.project.Projects
import org.jetbrains.exposed.sql.ResultRow

fun ResultRow.toProjectEntity() = ProjectEntity(
    id = this[Projects.id].value,
    name = this[Projects.name],
    client = this[Projects.client],
    description = this[Projects.description],
    amount = this[Projects.amount],
    startAt = this[Projects.startAt],
    endAt = this[Projects.endAt],
    isDeleted = this[Projects.isDeleted],
    createdAt = this[Projects.createdAt],
    updatedAt = this[Projects.updatedAt]
)