import React from 'react';
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <section className={styles['hero']}>
      <div className={styles['hero__wrapper']}>
        <h2>Hero Section</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus adipisci consequuntur earum officiis
          voluptas. Alias, quisquam a? Harum beatae iste eum, rem nesciunt, pariatur eaque laboriosam doloribus fugit
          ratione ea!
        </p>
      </div>
    </section>
  );
};

export default Hero;
