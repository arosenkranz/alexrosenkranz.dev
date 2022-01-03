import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from 'lib/fetcher';
import CustomLink from 'components/CustomLink';

const Music = () => {
  const { data: currentTrack, loading: trackLoading, error: trackError } = useSWR('/api/now-playing', fetcher);

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
    <section>
      <div>
        <h2>Current Listening</h2>
        <div>
          {currentTrack?.isPlaying ? (
            <CustomLink href={currentTrack.spotifyUrl}>
              {currentTrack.track} by {currentTrack.artist}
            </CustomLink>
          ) : (
            'Nothing is playing.'
          )}
        </div>
      </div>
    </section>
  );
};

export default Music;
