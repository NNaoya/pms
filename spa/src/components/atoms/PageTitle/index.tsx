import React from 'react';
import { Box } from '@material-ui/core';
import styles from './index.module.scss';

interface Props {
  text: string;
}

const PageTitle: React.VFC<Props> = (props) => {
  return (
    <Box>
      <h2 className={styles.title}>{props.text}</h2>
    </Box>
  );
};

export default PageTitle;
