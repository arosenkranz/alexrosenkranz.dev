import useSWR from 'swr';
import fetcher from 'lib/fetcher';
import CustomLink from 'components/CustomLink';

const Music = () => {
  const { data: currentTrack, error: trackError }: any = useSWR('/api/now-playing', fetcher, {
    refreshInterval: 1000 * 20,
  });

  return (
    <section className="mx-auto w-full max-w-3xl px-3 py-4">
      <h2 className="text-2xl">Current Listening</h2>
      <div>
        {currentTrack?.isPlaying ? (
          <CustomLink href={currentTrack.spotifyUrl} className="italic">
            {currentTrack.track} <span className="not-italic">by {currentTrack.artist}</span>
          </CustomLink>
        ) : (
          'Nothing is playing.'
        )}
      </div>
    </section>
  );
};

export default Music;
