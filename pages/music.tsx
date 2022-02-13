import PageContainer from 'components/PageContainer';
import { allMusic } from '.contentlayer/data';
import fetcher from 'lib/fetcher';

export default function Music(props) {
  console.log(props);
  return (
    <PageContainer pageTitle="Music" description="@TODO: Write a description" type="page">
      <h2 className="text-4xl">Current Listening</h2>
      {/* <pre>{JSON.stringify(props.playlists, null, 2)}</pre> */}
      {props.playlists.map((playlist) => (
        <div
          key={playlist.id}
          className=" max-w-3xl border-b border-dotted border-dark py-5 last:border-0 dark:border-light"
        >
          <h2 className="text-3xl">{playlist.name}</h2>
          <p className=" text-base">{playlist.description}</p>

          <div className="flex flex-wrap">
            {playlist.playlists.map((p) => (
              <div key={p.id} className="my-8 flex w-full flex-wrap justify-between">
                <a href={p.url} className="w-full md:w-1/6">
                  <img src={p.image.url} alt={p.name} />
                </a>
                <div className="w-full md:w-5/6">
                  <h3 className="text-2xl">{p.name}</h3>
                  <p className=" text-base">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </PageContainer>
  );
}

export async function getStaticProps() {
  const musicPosts = await Promise.all(
    allMusic.map(async (music) => {
      const url = 'http://localhost:3000/api/playlists?id=' + music.playlists.map((p) => p.id).join(',');
      const playlists = await fetcher(url);

      return {
        title: music.title,
        description: music.description,
        playlists,
      };
    }),
  );
  return {
    props: {
      playlists: musicPosts,
    },
  };
}
