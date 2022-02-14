import Image from 'next/image';
import PageContainer from 'components/PageContainer';
import { allMusic } from '.contentlayer/data';
import fetcher from 'lib/fetcher';

export default function Music(props) {
  console.log(props);
  return (
    <PageContainer pageTitle="Music" description="@TODO: Write a description" type="page">
      <h2 className="text-6xl">What I Listen To</h2>
      {props.musicPosts.map((m) => (
        <div
          key={m.title}
          className="max-w-3xl border-b border-dotted border-dark py-5 last:border-0 dark:border-light"
        >
          <h2 className="text-3xl">{m.title}</h2>
          <p className=" text-base">{m.description}</p>

          <div className="grid grid-flow-row grid-cols-12 gap-2 ">
            {m.playlists.map((p, i) => {
              return (
                <div
                  key={p.id}
                  className="group relative col-span-full my-8 flex h-96 w-full flex-row flex-wrap lg:col-span-full"
                >
                  <Image
                    src={p.playlist.image.url}
                    alt={p.playlist.name}
                    className="w-100 h-100 absolute z-0 grayscale transition group-hover:rotate-2 group-hover:scale-125 group-hover:filter-none"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute z-10 flex h-full w-full flex-col bg-dark bg-opacity-50 p-4">
                    <h3 className="mt-auto text-3xl italic underline underline-offset-1">{p.name}</h3>
                    <p className="text-base">{p.description}</p>
                    <a href={p.playlist.url} target="_blank" rel="nofollow noreferrer">
                      <button className="rounded border border-light bg-transparent py-2 px-4 font-semibold text-light hover:border-transparent hover:bg-light hover:text-dark">
                        Listen
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
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
      const playlistData = await fetcher(url);

      return {
        title: music.title,
        description: music.description,
        playlists: music.playlists.map((p) => {
          const playlist = playlistData.find((playlist) => playlist.id === p.id);
          return {
            ...p,
            playlist,
          };
        }),
      };
    }),
  );
  return {
    props: {
      musicPosts,
    },
  };
}
