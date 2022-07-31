import { format } from 'date-fns';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Post } from 'contentlayer/generated';

import components from 'components/MDXComponents';

export default function BlogPost({ post }: { post: Post }) {
  const Component = useMDXComponent(post.body.code);
  const date = post.date ? format(new Date(post.date), 'MMMM dd, yyyy') : '';
  console.log(post);
  return (
    <article>
      <div className="mb-8 w-full">
        <div className="group relative block">
          {post.image && (
            <div className="absolute inset-0 max-h-72">
              <Image
                src={post.image}
                alt={post.title}
                className="w-100 relative z-0 h-96 max-h-96 scale-110 grayscale transition-all duration-500 group-hover:scale-100 group-hover:filter-none"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          )}
          <div className="relative z-10 flex h-full w-full flex-col bg-dark bg-opacity-50 p-4">
            <div>
              <h3 className="text-normal inline-block bg-dark p-1 text-sm text-light">
                {post.category} {date && { date }}
              </h3>
            </div>
            <h1 className="text-5xl font-extralight italic text-light">{post.title}</h1>
            {post.description && <p className="text-light">{post.description}</p>}

            {/* <div className="mt-2 flex flex-wrap transition">
              {post.tags &&
                post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="mr-2 mb-2 bg-light bg-opacity-50 px-3 py-1 text-sm text-dark transition group-hover:bg-opacity-80 "
                  >
                    {tag}
                  </span>
                ))}
            </div> */}
            <div className="relative z-10 mx-auto mb-10 w-10/12 max-w-prose bg-light text-dark dark:bg-dark dark:text-light">
              {post.playlistId && (
                <iframe
                  src={`https://open.spotify.com/embed/playlist/${post.playlistId}?utm_source=generator&theme=0`}
                  width="100%"
                  height="500"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  className="relative mx-auto mb-4"
                ></iframe>
              )}
              <Component
                components={
                  {
                    ...components,
                  } as any
                }
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
