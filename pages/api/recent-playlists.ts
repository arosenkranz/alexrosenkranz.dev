import type { NextApiRequest, NextApiResponse } from 'next';
import { getUserPlaylists } from 'lib/spotify-api';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const response = await getUserPlaylists();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }
  const playlists = await response.json();

  return res.status(200).json({
    playlists: playlists.items
      .filter((playlist) => playlist.public)
      .map((playlist) => ({
        name: playlist.name,
        description: playlist.description,
        href: playlist.href,
        image: playlist.images[0],
      })),
  });
}
