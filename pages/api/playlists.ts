import type { NextApiRequest, NextApiResponse } from 'next';
import { getSinglePlaylist } from 'lib/spotify-api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await Promise.all(req.query.id.split(',').map((id) => getSinglePlaylist(id)));

  const playlists = await Promise.all(
    response.map(async (r) => {
      const playlist = await r.json();
      return {
        id: playlist.id,
        name: playlist.name,
        description: playlist.description,
        image: playlist.images[0],
        url: playlist.external_urls.spotify,
      };
    }),
  );
  console.log('playlists', playlists);
  return res.status(200).json(playlists);
}
