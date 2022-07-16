import React from 'react';
import { ListItemIcon, ListItemText } from '@material-ui/core';

interface Props {
  children: React.ReactNode;
  text: string;
}

const IconText: React.VFC<Props> = (props) => {
  return (
    <>
      <ListItemIcon>{props.children}</ListItemIcon>
      <ListItemText>{props.text}</ListItemText>
    </>
  );
};

export default IconText;
