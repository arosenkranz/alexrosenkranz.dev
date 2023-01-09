import CustomLink from 'components/CustomLink';

const links: { label: string; url: string }[] = [
  {
    label: 'Resume',
    url: '/assets/pdfs/alex_rosenkranz_resume.pdf',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/arosenkranz',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alexrosenkranz',
  },
  {
    label: 'Email',
    url: 'mailto:alexrosenkranz@gmail.com',
  },
  {
    label: 'Spotify',
    url: 'https://open.spotify.com/user/alexrosenkranz',
  },
  {
    label: 'Soundcloud',
    url: 'https://soundcloud.com/krunz',
  },
  {
    label: 'Mixcloud',
    url: 'https://www.mixcloud.com/alexrosenkranz/',
  },
];

export default function Footer() {
  return (
    <footer className="mx-auto mb-4 flex w-full flex-wrap border-t border-dark py-2 dark:border-light ">
      <ul className="flex w-auto flex-wrap items-center justify-start  ">
        {links.map(({ label, url }) => (
          <CustomLink
            key={url}
            href={url}
            className="mr-3 w-1/4 px-3 py-1 text-base lowercase transition-colors duration-150 hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark sm:w-auto"
          >
            {label}
          </CustomLink>
        ))}
      </ul>
    </footer>
  );
}
