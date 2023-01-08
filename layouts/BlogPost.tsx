import { format } from 'date-fns';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Post } from 'contentlayer/generated';

import components from 'components/MDXComponents';

export default function BlogPost({ post }: { post: Post }) {
  const Component = useMDXComponent(post.body.code);
  const Description = useMDXComponent(post.description.code);
  const date = post.date ? format(new Date(post.date), 'MMMM dd, yyyy') : '';
  return (
    <article>
      <div className="group relative block h-80 max-h-80 overflow-visible">
        {post.image && (
          <div className="absolute inset-0 h-80 max-h-80">
            <div className="relative z-10 h-80 max-h-80 w-full bg-black bg-opacity-30"></div>
            <Image
              src={post.image}
              alt={post.title}
              className="w-100 relative z-0 h-80 max-h-80 "
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        )}
        <div className="relative z-10 flex h-full w-full flex-col justify-end">
          <div>
            <h3 className="relative -top-1 inline-block p-1 text-3xl font-normal lowercase  italic text-light">
              {date && { date }}
              {post.category}
            </h3>
          </div>
          <h1 className="post-title lowercase leading-none text-light">{post.title}</h1>
        </div>
      </div>

      <div className="mx-auto my-10 w-10/12 max-w-prose rounded-xl bg-light text-dark dark:bg-dark dark:text-light">
        {post.description && (
          <p>
            <Description />
          </p>
        )}
        <Component
          components={
            {
              ...components,
            } as any
          }
        />
        {post.playlistId && (
          <iframe
            src={`https://open.spotify.com/embed/playlist/${post.playlistId}?utm_source=generator&theme=0`}
            width="100%"
            height="500"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="relative mx-auto mb-4 rounded-xl border-0 bg-light dark:bg-dark"
          ></iframe>
        )}
      </div>
    </article>
  );
}
