import React from 'react';
import styles from './index.module.scss';
import { Box, MenuItem, MenuList, Paper } from '@material-ui/core';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import IconText from '../../molecules/IconText';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const Menu: React.VFC<Props> = (props) => {
  return (
    <Box className={styles.root}>
      <Paper className={styles.menu}>
        <MenuList>
          <MenuItem>
            <Link className={styles.link} to="/">
              <IconText text="案件情報一覧">
                <WysiwygIcon fontSize="medium" />
              </IconText>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className={styles.link} to="resources">
              <IconText text="リソース一覧">
                <PersonIcon fontSize="medium" />
              </IconText>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className={styles.link} to="sales">
              <IconText text="売上一覧">
                <AttachMoneyIcon fontSize="medium" />
              </IconText>
            </Link>
          </MenuItem>
        </MenuList>
      </Paper>

      <Box className={styles.content}>{props.children}</Box>
    </Box>
  );
};

export default Menu;
