import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import fetcher from 'lib/fetcher';

type TPlaylist = {
  id: string;
  genres?: string[];
  children?: JSX.Element | JSX.Element[];
};

type TPlaylistRes = {
  id: string;
  name: string;
  image: {
    url: string;
  };
  url: string;
};

export default function Playlist({ id, genres, children }: TPlaylist) {
  const [playlist, setPlaylist] = useState<TPlaylistRes | null>(null);
  const [loading, setLoading] = useState(true);

  const getPlaylist = useCallback(async () => {
    const url = `/api/playlist?id=${id}`;
    const playlistData: TPlaylistRes = await fetcher(url);
    setLoading(false);
    setPlaylist(playlistData);
  }, [id]);

  useEffect(() => {
    if (loading) {
      getPlaylist();
    }
  }, [loading, getPlaylist]);

  return (
    <div className="group col-span-full mb-4 flex w-full flex-row flex-wrap border-b border-dotted border-dark last:border-0 dark:border-light md:col-span-full">
      {playlist ? (
        <div className="w-full">
          <div className="relative block h-72 transition duration-1000 ease-in-out">
            <Image
              src={playlist.image.url}
              alt={playlist.name}
              className="w-100 absolute z-0 h-72 scale-110 grayscale transition group-hover:scale-100 group-hover:filter-none"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
            <div className="absolute z-10 flex h-full w-full flex-col bg-dark bg-opacity-50 p-4">
              <h3 className="text-5xl font-extralight italic text-light opacity-75 mix-blend-color-dodge transition-opacity group-hover:opacity-100">
                {playlist.name}
              </h3>
              <div className="mt-2 flex flex-wrap transition">
                {genres &&
                  genres.map((genre) => (
                    <span
                      key={genre}
                      className="mr-2 mb-2 bg-light bg-opacity-50 px-3 py-1 text-sm text-dark  transition group-hover:bg-opacity-80 "
                    >
                      {genre}
                    </span>
                  ))}
              </div>
            </div>
          </div>
          <div className="relative z-10 mx-auto mb-10 -mt-14 w-10/12 bg-light text-dark dark:bg-dark dark:text-light">
            {children && <div className="mb-2 px-2 py-1">{children}</div>}
            <iframe
              src={`https://open.spotify.com/embed/playlist/${playlist.id}?utm_source=generator&theme=0`}
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="relative mx-auto mb-4"
            ></iframe>
          </div>
        </div>
      ) : (
        <div className="m-auto animate-pulse">Playlist loading...</div>
      )}
    </div>
  );
}
