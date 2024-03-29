import type { NextApiRequest, NextApiResponse } from 'next';
import { getNowPlaying } from 'lib/spotify-api';

type TrackData = {
  track: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  isPlaying: boolean;
  spotifyUrl: string;
};

export default async function handler(_: NextApiRequest, res: NextApiResponse<TrackData | { isPlaying: boolean }>) {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();
  const isPlaying = song.is_playing;
  const track = song.item.name;
  const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const spotifyUrl = song.item.external_urls.spotify;

  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    spotifyUrl,
    track,
  });
}
