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
    label: 'Spotify',
    url: 'https://open.spotify.com/user/alexrosenkranz',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alexrosenkranz',
  },
  {
    label: 'Email',
    url: 'mailto:alexrosenkranz@gmail.com',
  },
];

export default function Footer() {
  return (
    <footer className="mx-auto mb-4 w-full max-w-3xl">
      <ul className="flex w-full flex-wrap items-center border-t border-dark py-2 dark:border-light ">
        {links.map(({ label, url }) => (
          <CustomLink
            key={url}
            href={url}
            className="mr-3 px-3 py-1 text-base font-normal hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark"
          >
            {label}
          </CustomLink>
        ))}
      </ul>
    </footer>
  );
}
