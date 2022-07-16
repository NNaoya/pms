import React from 'react';
import styles from './index.module.scss';
import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core';

const Header: React.VFC = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <div className={styles.root}>
            <Typography component="h1" variant="h6" color="inherit" noWrap>
              Lei Project
            </Typography>
            <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
