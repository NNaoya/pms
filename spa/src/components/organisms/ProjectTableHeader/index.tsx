import React, { useMemo } from 'react';
import { TableRow } from '@material-ui/core';
import styles from '../Project/index.module.scss';
import { styledTableCell } from '../Project';

const ProjectTableHeader: React.VFC = () => {
  const StyledTableCell = useMemo(() => styledTableCell, []);

  return (
    <TableRow>
      <StyledTableCell align="center">案件名</StyledTableCell>
      <StyledTableCell align="center">顧客名</StyledTableCell>
      <StyledTableCell align="center" className={styles.description}>
        詳細
      </StyledTableCell>
      <StyledTableCell align="center">金額</StyledTableCell>
      <StyledTableCell align="center">アサイン</StyledTableCell>
      <StyledTableCell align="center">開始</StyledTableCell>
      <StyledTableCell align="center">終了</StyledTableCell>
    </TableRow>
  );
};

export default ProjectTableHeader;
