import { useTheme } from '@/lib/ThemeProvider';
import CustomLink from '@/components/CustomLink';
import styles from './footer.module.scss';

const links = [
  {
    label: 'Resume',
    url: '/assets/pdfs/alex_rosenkranz_resume.pdf',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/arosenkranz',
  },
  {
    label: 'Spotify',
    url: 'https://open.spotify.com/user/alexrosenkranz',
  },
  {
    label: 'Email',
    url: 'mailto:alexrosenkranz@gmail.com',
  },
];

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__wrapper']}>
        <h2 className={styles['footer__title']}>Get In Touch</h2>
        <ul className={styles['footer__list']}>
          {links.map(({ label, url }) => (
            <CustomLink
              key={url}
              href={url}
              className={`${styles['footer__list-link']} ${
                theme === 'LIGHT' ? styles['footer__list-link--light'] : styles['footer__list-link--dark']
              }`}
            >
              {label}
            </CustomLink>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
