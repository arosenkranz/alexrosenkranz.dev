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
    <footer className="mt-auto mb-4">
      <ul className="w-full p-3 flex flex-wrap items-center border-t border-neutral-800 dark:border-neutral-200">
        {links.map(({ label, url }) => (
          <CustomLink key={url} href={url} className="mr-3 text-base font-normal">
            {label}
          </CustomLink>
        ))}
      </ul>
    </footer>
  );
}
