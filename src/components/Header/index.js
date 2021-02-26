import React from 'react';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['header__wrapper']}>
        <h1>Alex Rosenkranz</h1>
      </div>
    </header>
  );
};

export default Header;
