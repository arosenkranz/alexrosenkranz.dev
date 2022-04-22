import Link from 'next/link';
import PageContainer from 'components/PageContainer';

export default function Home() {
  return (
    <PageContainer
      pageTitle="Home"
      description="Hi there! I'm Alex Rosenkranz, a developer, subject matter expert, educator, and technical writer with an interest in music and design—both digital and physical."
      type="page"
    >
      <div className="mx-auto w-full max-w-3xl px-3 md:px-0">
        <section className="mt-0 mb-12 max-w-prose">
          <h1 className="text-6xl">Alex Rosenkranz</h1>
          <h2 className="text-xl italic">Technical Trainer & Software Engineer</h2>
          <p className="mt-5">
            Currently at{' '}
            <a href="https://datadoghq.com" target="_blank" rel="noreferrer noopener">
              Datadog
            </a>{' '}
            on the community team, where I help users understand how to best leverage Datadog's tools and services
            through technical courses and workshops.
          </p>
          <p>
            After leading a recent workshop, I was described as a "great teacher and nice guy", so that made me feel
            nice.
          </p>
          <p>
            I spend most of my time staying up to date on new tech, curating my{' '}
            <a href="https://open.spotify.com/user/alexrosenkranz" target="_blank" rel="noopener noreferrer">
              Spotify playlists
            </a>
            , and complaining about house projects I haven't done yet.
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
                See recent posts{' '}
                <span className="relative inline-block transition-transform group-hover:translate-x-2">&rarr;</span>
              </a>
            </div>
          </Link>
        </section>
      </div>
    </PageContainer>
  );
}
