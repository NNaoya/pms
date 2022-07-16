import React from 'react';
import styles from './index.module.scss';
import PageTitle from '../../atoms/PageTitle';
import { Box } from '@material-ui/core';

const SaleListData: React.VFC = () => {
  return (
    <Box className={styles.root}>
      <PageTitle text="売上一覧" />
    </Box>
  );
};

export default SaleListData;
