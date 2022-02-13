import Link from 'next/link';
import PageContainer from 'components/PageContainer';

export default function Home() {
  return (
    <PageContainer
      pageTitle="Home"
      description="Hi there! I'm Alex Rosenkranz, a developer, subject matter expert, educator, and technical writer with an interest in music and design—both digital and physical."
      type="page"
    >
      <section className="mt-0 mb-12 max-w-prose">
        <h1 className="text-6xl">Alex Rosenkranz</h1>
        <h4 className="text-xl italic">Technical Curriculum Developer</h4>
        <p className="mt-5">
          Currently at{' '}
          <a href="https://datadoghq.com" target="_blank" rel="noreferrer noopener">
            Datadog
          </a>{' '}
          on the community team, where I help users learn how to use Datadog tools and services to improve their own
          applications and deliver optimal user experiences.
        </p>
        <p>
          I enjoy teaching about web development and all things JavaScript, curating{' '}
          <a href="https://open.spotify.com/user/alexrosenkranz" target="_blank" rel="noopener noreferrer">
            Spotify playlists
          </a>
          , and learning about new technologies and tools.
        </p>
      </section>
      <section className="flex flex-wrap justify-between">
        <Link href="/work" passHref>
          <div className="group my-2 basis-full cursor-pointer border border-dashed border-dark p-3 dark:border-light md:basis-[48%]">
            <a className="text-xl font-light italic">
              See what I've worked on{' '}
              <span className="relative inline-block transition-transform group-hover:translate-x-2">&rarr;</span>
            </a>
          </div>
        </Link>
        <Link href="/blog" passHref>
          <div className="group my-2 basis-full cursor-pointer border border-dashed border-dark p-3 dark:border-light md:basis-[48%]">
            <a className="text-xl font-light italic">
              See Recent Posts{' '}
              <span className="relative inline-block transition-transform group-hover:translate-x-2">&rarr;</span>
            </a>
          </div>
        </Link>
      </section>
    </PageContainer>
  );
}
