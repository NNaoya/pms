import React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@material-ui/core';

interface Props {
  label: string;
  id: string;
  value: string;
  size: 'small' | 'medium';
}
const TextFieldWithLabel: React.VFC<Props> = (props) => {
  return (
    <Box>
      <TextField
        label={props.label}
        id={props.id}
        defaultValue={props.value}
        size={props.size}
      />
    </Box>
  );
};

export default TextFieldWithLabel;
