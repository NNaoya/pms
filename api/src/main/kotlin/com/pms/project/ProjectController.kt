package com.pms.project

import org.springframework.web.bind.annotation.*

@RestController
class ProjectController(
    private val projectService: ProjectService
) {
    /**
     * プロジェクトの全件取得処理
     */
    @GetMapping("/projects")
    fun index(): ProjectIndexResponse {
        val result = projectService.select()
        return ProjectIndexResponse(result)
    }

    /**
     * プロジェクトの詳細取得処理
     */
    @GetMapping("/projects/{id}")
    fun getProjectDetail(
            @PathVariable("id") id: Int
    ): ProjectIndexResponse {
        val result = projectService.selectById(id)
        return ProjectIndexResponse(result)
    }

    /**
     * プロジェクトの作成処理
     */
    @PostMapping("projects")
    fun create(@RequestBody body: ProjectResource) =
            projectService.create(body)

    /**
     * プロジェクトの更新処理
     */
    @PutMapping("/projects/{id}")
    fun updateProjectDetail(
            @PathVariable("id") id: Int,
            @RequestBody body: ProjectResource
    ) {
        projectService.updateById(id, body)
    }
}