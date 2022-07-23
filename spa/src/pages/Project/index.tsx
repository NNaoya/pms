import React, { useState } from 'react';
import ProjectList from '../../components/templates/Project';
import { getApi } from '../../hooks/hooks';

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
  const [total, setTotal] = useState<number>(0);
  const {data, isLoading } = getApi<Array<ProjectData>>("http://localhost:8080/projects");

  const getProjectData = (page: number) => {
    // TODO: ページネーション追加
    setTotal(1);
  };

  return (
    <>
      {data && (
        <ProjectList
          projects={data}
          total={total}
          getProjectData={getProjectData}
        />
      )}
    </>
  );
};

export default Project;
