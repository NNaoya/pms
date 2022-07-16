package com.pms.project

import java.time.Instant

data class ProjectEntity(
    val id: Int,
    val name: String?,
    val client: String?,
    val description: String?,
    val amount: Int?,
    val startAt: Instant?,
    val endAt: Instant?,
    val isDeleted: Int?,
    val createdAt: Instant,
    val updatedAt: Instant
)