import React, { useEffect, useState } from 'react';
import ProjectList from '../../components/templates/Project';
import {json} from "stream/consumers";

interface ProjectData {
  id: string;
  name: string;
  client: string;
  description: string;
  amount: number;
  members: Array<Member>;
  startDate: string;
  endDate: string;
}

interface Member {
  id: string;
  number: number;
  name: string;
}

const Project: React.VFC = () => {
  // TODO: API結合
  const [projects, setProjects] = useState<Array<ProjectData>>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    (async() => {
      const result = await fetch("http://localhost:8080/projects")
          .then(response => response.json())
      setProjects(result.projects);
      setTotal(result.projects.length);
    })()
  }, []);

  const getProjectData = (page: number) => {
    // const data = projectsTempData.slice((page - 1) * 10, page * 10);
    // setProjects(data);
    // setTotal(projectsTempData.length);
  };

  return (
    <>
      {projects && (
        <ProjectList
          projects={projects}
          total={total}
          getProjectData={getProjectData}
        />
      )}
    </>
  );
};

export default Project;
