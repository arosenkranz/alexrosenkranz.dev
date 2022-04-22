import type { NextApiRequest, NextApiResponse } from 'next';
import { getSinglePlaylist } from 'lib/spotify-api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const response = await getSinglePlaylist(id as string);
  const playlist = await response.json();
  return res.status(200).json({
    id: playlist.id,
    name: playlist.name,
    image: playlist.images[0],
    url: playlist.external_urls.spotify,
  });
}
