package com.pms.project

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.`java-time`.timestamp

object Projects : IntIdTable("projects") {
    val name = varchar("name", 255).nullable()
    val client = varchar("client", 255).nullable()
    val description = varchar("description", 255).nullable()
    val amount = integer("amount").nullable()
    val startAt = timestamp("start_at").nullable()
    val endAt = timestamp("end_at").nullable()
    val isDeleted = integer("is_deleted").nullable()
    val createdAt = timestamp("created_at")
    val updatedAt = timestamp("updated_at")
}