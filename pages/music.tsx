import type { InferGetStaticPropsType } from 'next';
import PageContainer from 'components/PageContainer';
import { allMusic } from '.contentlayer/data';
import fetcher from 'lib/fetcher';

import MusicList from 'layouts/MusicList';

export default function Music({ musicPosts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageContainer pageTitle="Music" description="@TODO: Write a description" type="page">
      <h2 className="text-6xl">What I Listen To</h2>
      <MusicList musicPosts={musicPosts} />
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
          const spotify = playlistData.find((playlist) => playlist.id === p.id);
          return {
            ...p,
            spotify,
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
