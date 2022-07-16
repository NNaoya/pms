import React from 'react';
import logo from './images/logo.svg';
import styles from './index.module.scss';

const Edit: React.VFC = () => {
  return (
    <div className={styles.root}>
      <header className={styles['header']}>
        <img src={logo} className={styles['logo']} alt="logo" />
        <p>案件情報編集</p>
      </header>
    </div>
  );
};

export default Edit;
