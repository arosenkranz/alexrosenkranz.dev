import PageContainer from 'components/PageContainer';

export default function Home() {
  return (
    <PageContainer
      pageTitle="Home"
      description="Hi there! I'm Alex Rosenkranz, a developer, subject matter expert, educator, and technical writer with an interest in music and design—both digital and physical."
      type="page"
    >
      <div className="mx-auto w-full">
        <section className="mt-0 mb-12 max-w-prose">
          <h1 className="text-6xl">Alex Rosenkranz</h1>
          <h2 className="text-xl font-normal">Technical Curriculum Developer</h2>
          <p className="mt-5">
            Currently at{' '}
            <a href="https://datadoghq.com" target="_blank" rel="noreferrer noopener">
              Datadog
            </a>{' '}
            on the community team, where I help users understand how to best leverage Datadog's tools and services
            through technical courses and workshops.
          </p>
          <p>
            I spend most of my time staying up to date on new tech, curating my{' '}
            <a href="https://open.spotify.com/user/alexrosenkranz" target="_blank" rel="noopener noreferrer">
              Spotify playlists
            </a>
            , and complaining about house projects I haven't done yet.
          </p>
        </section>
      </div>
    </PageContainer>
  );
}
