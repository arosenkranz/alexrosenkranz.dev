import { format } from 'date-fns';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Post } from 'contentlayer/generated';

import components from 'components/MDXComponents';

export default function BlogPost({ post }: { post: Post }) {
  const Component = useMDXComponent(post.body.code);
  const date = post.date ? format(new Date(post.date), 'MMMM dd, yyyy') : '';

  return (
    <article>
      <div className=" mb-8 w-full max-w-prose">
        <h1 className="text-6xl">{post.title}</h1>
        <h3 className="inline-block bg-dark p-1 text-xl text-light dark:bg-light dark:text-dark">
          {post.category} {date && { date }}
        </h3>
        {post.description && <p>{post.description}</p>}
      </div>
      <div className="post-wrapper">
        <Component
          components={
            {
              ...components,
            } as any
          }
        />
      </div>
    </article>
  );
}
