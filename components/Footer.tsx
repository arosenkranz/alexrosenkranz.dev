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
    label: 'Email',
    url: 'mailto:alexrosenkranz@gmail.com',
  },
];

export default function Footer() {
  return (
    <footer className="mb-4">
      <ul className="w-full py-2 flex flex-wrap items-center border-t border-dark dark:border-light ">
        {links.map(({ label, url }) => (
          <CustomLink
            key={url}
            href={url}
            className="px-3 py-1 mr-3 text-base font-normal hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark"
          >
            {label}
          </CustomLink>
        ))}
      </ul>
    </footer>
  );
}
