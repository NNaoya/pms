import React, { useMemo } from 'react';
import { getArraySplits } from '../../../utils/array';
import { styledTableCell, styledTableRow } from '../Project';

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

const ProjectTableBody: React.VFC<Props> = (props) => {
  const StyledTableCell = useMemo(() => styledTableCell, []);
  const StyledTableRow = useMemo(() => styledTableRow, []);

  return (
    <>
      {props.rows.map((row) => (
        <StyledTableRow key={row.id}>
          <StyledTableCell align="center">{row.name}</StyledTableCell>
          <StyledTableCell align="center">{row.client}</StyledTableCell>
          <StyledTableCell align="left">{row.description}</StyledTableCell>
          <StyledTableCell align="center">{row.amount}</StyledTableCell>
          <StyledTableCell align="center">
            {getArraySplits(row.members)}
          </StyledTableCell>
          <StyledTableCell align="center">2021/2</StyledTableCell>
          <StyledTableCell align="center">2021/6</StyledTableCell>
        </StyledTableRow>
      ))}
    </>
  );
};

export default ProjectTableBody;
