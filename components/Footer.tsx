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
      <ul className="w-full py-2 flex flex-wrap items-center border-t border-neutral-800 dark:border-neutral-100 ">
        {links.map(({ label, url }) => (
          <CustomLink
            key={url}
            href={url}
            className="px-3 py-1 mr-3 text-base font-normal hover:bg-neutral-800 hover:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-800"
          >
            {label}
          </CustomLink>
        ))}
      </ul>
    </footer>
  );
}
