import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__wrapper']}>
        <h2>Footer Section</h2>
        <p>&copy;{new Date().getFullYear()} Alex Rosenkranz</p>
        <p>
          <a href="https://github.com/arosenkranz">GitHub</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
