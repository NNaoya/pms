import React from 'react';
import { Button } from '@mui/material';

interface Props {
  variant: 'text' | 'contained' | 'outlined';
  size: 'small' | 'medium' | 'large';
  text: string;
}

const ActionButton: React.VFC<Props> = (props) => {
  return (
    <Button variant={props.variant} size={props.size}>
      {props.text}
    </Button>
  );
};

export default ActionButton;
