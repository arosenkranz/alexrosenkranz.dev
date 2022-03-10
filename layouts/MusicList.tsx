import Image from 'next/image';

export default function MusicList({ musicPosts }) {
  return (
    <>
      {musicPosts.map((post) => (
        <div key={post.title} className=" border-b border-dotted border-dark py-5 last:border-0 dark:border-light">
          <h2 className="text-3xl">{post.title}</h2>
          <p className=" text-base">{post.description}</p>

          <div className="grid grid-flow-row grid-cols-12">
            {post.playlists.map((playlist) => {
              return (
                <a
                  key={playlist.id}
                  href={playlist.spotify.url}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="group relative col-span-full flex h-72 w-full flex-row flex-wrap transition duration-1000 ease-in-out md:col-span-full"
                >
                  <Image
                    src={playlist.spotify.image.url}
                    alt={playlist.spotify.name}
                    className="w-100 h-100 absolute z-0 scale-110 grayscale transition group-hover:scale-100 group-hover:filter-none"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <div className="absolute z-10 flex h-full w-full flex-col bg-dark bg-opacity-50 p-4">
                    <h3 className="text-right text-5xl font-extralight italic text-light opacity-75 mix-blend-color-dodge  transition-opacity group-hover:opacity-100">
                      {playlist.name}
                    </h3>
                    <div className="mt-2 flex origin-top-right scale-0 flex-wrap justify-end transition duration-200 ease-in-out group-hover:scale-100">
                      {playlist.genres.map((genre) => (
                        <span
                          key={genre}
                          className="mr-2 mb-2  bg-light bg-opacity-50 px-3 py-1 text-sm text-dark  transition group-hover:bg-opacity-80 "
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}
