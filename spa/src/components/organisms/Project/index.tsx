import React from 'react';
import styles from './index.module.scss';
import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import ProjectTableBody from '../ProjectTableBody';
import ProjectTableHeader from '../ProjectTableHeader';
import { tableCellClasses } from '@mui/material';

interface Props {
  rows: Array<ProjectData>;
}

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

const ProjectTable: React.VFC<Props> = (props) => {
  return (
    <>
      <TableContainer className={styles.root}>
        <Table>
          <TableHead>
            <ProjectTableHeader />
          </TableHead>
          <TableBody>
            <ProjectTableBody rows={props.rows} />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export const styledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const styledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default ProjectTable;
