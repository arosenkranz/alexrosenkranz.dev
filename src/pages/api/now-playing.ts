import type { APIRoute } from "astro";
import { getNowPlaying } from "@lib/spotify";

type TrackData = {
  track: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  isPlaying: boolean;
  spotifyUrl: string;
};

export const GET: APIRoute = async () => {
  const response = await getNowPlaying();
  console.log(response.status);
  if (response.status === 204 || response.status > 400) {
    return new Response(null, {
      status: response.status,
    });
  }

  const song = await response.json();
  const isPlaying = song.is_playing;
  const track = song.item.name;
  const artist = song.item.artists
    .map((_artist: any) => _artist.name)
    .join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const spotifyUrl = song.item.external_urls.spotify;

  const responseBody = {
    track,
    artist,
    album,
    albumImageUrl,
    isPlaying,
    spotifyUrl,
  };

  return new Response(JSON.stringify(responseBody), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
    },
  });
};
