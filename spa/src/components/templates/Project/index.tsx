import React, { useMemo } from 'react';
import { Box } from '@material-ui/core';
import ProjectTable from '../../organisms/Project';
import styles from './index.module.scss';
import TextFieldWithLabel from '../../atoms/TextField';
import PageTitle from '../../atoms/PageTitle';
import ActionButton from '../../atoms/ActionButton';
import ActionPagination from '../../molecules/ActionPagination';

interface ProjectListData {
  projects: Array<ProjectItem>;
  total: number;
  getProjectData: (arg: number) => void;
}

interface ProjectItem {
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

const ProjectList: React.VFC<ProjectListData> = (props) => {
  const updateList = (page: number) => {
    props.getProjectData(page);
  };

  const pageCount = useMemo(() => {
    return Math.ceil(props.total / 10);
  }, [props.total]);

  return (
    <Box className={styles.root}>
      <PageTitle text="案件情報一覧" />
      <Box className={styles.container}>
        <Box className={styles.search}>
          <Box className={styles.name}>
            <TextFieldWithLabel
              label="案件名"
              id="project-name"
              value=""
              size="medium"
            />
          </Box>
          <Box className={styles.client}>
            <TextFieldWithLabel
              label="顧客名"
              id="project-client"
              value=""
              size="medium"
            />
          </Box>
        </Box>
        <Box className={styles.btn}>
          <ActionButton variant="contained" size="large" text="検索" />
        </Box>
      </Box>

      <br />
      <ProjectTable rows={props.projects} />
      <Box className={styles.pagination}>
        <ActionPagination
          count={pageCount}
          color="primary"
          updateList={updateList}
        />
      </Box>
    </Box>
  );
};

export default ProjectList;
