import { useState, useEffect } from 'react';
import useSWR from 'swr';
import fetcher from 'lib/fetcher';
import CustomLink from 'components/CustomLink';

const Music = () => {
  const { data: currentTrack, error: trackError } = useSWR('/api/now-playing', fetcher, { refreshInterval: 1000 * 30 });

  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    getPlaylists();
  }, []);

  const getPlaylists = async () => {
    try {
      const playlists = await fetcher('/api/recent-playlists');
      setPlaylists(playlists);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="px-3 py-4">
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
