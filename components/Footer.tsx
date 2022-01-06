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
    <footer className="mt-auto mb-4 flex flex-wrap justify-between items-center">
      <h2 className="text-4xl">Get In Touch</h2>
      <ul>
        {links.map(({ label, url }) => (
          <CustomLink key={url} href={url} className="mr-2 text-lg">
            {label}
          </CustomLink>
        ))}
      </ul>
    </footer>
  );
}
