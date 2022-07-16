import React from 'react';
import styles from './index.module.scss';
import PageTitle from '../../atoms/PageTitle';
import { Box } from '@material-ui/core';

const ResourceListData: React.VFC = () => {
  return (
    <Box className={styles.root}>
      <PageTitle text="リソース一覧" />
    </Box>
  );
};

export default ResourceListData;
