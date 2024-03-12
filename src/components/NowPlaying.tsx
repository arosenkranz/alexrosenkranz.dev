import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function NowPlaying() {
  const { data, isLoading } = useQuery({
    queryKey: ["nowPlaying"],
    queryFn: async () =>
      await fetch("/api/now-playing").then(res => res.json()),
    refetchInterval: 20000,
  });

  return (
    <div className="mx-auto max-w-3xl">
      <div className="align-start flex flex-col gap-1">
        <div className="font-sans text-lg font-semibold">Now listening</div>
        <div className="flex items-center">
          {isLoading || !data ? (
            <p className="text-normal">Nothing playing at the moment.</p>
          ) : (
            <>
              <img
                className="max-h-14 max-w-14 rounded-md"
                src={data.albumImageUrl}
                alt="Album cover"
              />
              <div className="ml-4">
                <a href={data.url} target="_blank" rel="noreferrer">
                  <p className="text-normal font-bold">{data.track}</p>
                  <p className="text-sm">{data.artist}</p>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function NowPlayingWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto w-full max-w-3xl p-4">
        <NowPlaying />
      </div>
    </QueryClientProvider>
  );
}
