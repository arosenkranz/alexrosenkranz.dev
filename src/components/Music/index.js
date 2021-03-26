import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import CustomLink from '@/components/CustomLink';

import styles from './music.module.scss';

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

  console.log(playlists);

  return (
    <section className={styles['music']}>
      <div className={styles['music__spotifyWrapper']}>
        <h2>Current Listening</h2>
        <div className={styles['music__nowPlayingWrapper']}>
          {currentTrack?.isPlaying ? (
            <CustomLink href={currentTrack.spotifyUrl} className={styles['music__nowPlaying']}>
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
