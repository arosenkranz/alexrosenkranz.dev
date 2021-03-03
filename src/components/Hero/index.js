import React from 'react';
import styles from './hero.module.scss';

const Hero = ({ headline, children }) => {
  return (
    <section className={styles['hero']}>
      <div className={styles['hero__wrapper']}>
        <h1>{headline}</h1>
        {children}
      </div>
    </section>
  );
};

export default Hero;
