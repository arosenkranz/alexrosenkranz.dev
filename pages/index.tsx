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
          <h1 className="text-6xl">alex rosenkranz</h1>
          <h2 className="text-xl font-normal">technical training // software engineering // music collector</h2>
          <p className="mt-5">
            currently at{' '}
            <a href="https://datadoghq.com" target="_blank" rel="noreferrer noopener">
              datadog
            </a>{' '}
            on the community team, where i help users understand how to best leverage Datadog's tools and services
            through technical courses and workshops.
          </p>
          <p>
            i spend most of my time staying up to date on new tech, curating my{' '}
            <a href="https://open.spotify.com/user/alexrosenkranz" target="_blank" rel="noopener noreferrer">
              spotify playlists
            </a>
            , and complaining about house projects i haven't done yet.
          </p>
        </section>
      </div>
    </PageContainer>
  );
}
