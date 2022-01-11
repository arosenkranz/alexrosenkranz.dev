import { format } from 'date-fns';
import { useMDXComponent } from 'next-contentlayer/hooks';
import type { Post } from '.contentlayer/types';

import components from 'components/MDXComponents';

export default function BlogPost({ post }: { post: Post }) {
  const Component = useMDXComponent(post.body.code);
  const date = format(new Date(post.date), 'MMMM dd, yyyy');

  return (
    <>
      <h1 className="text-6xl">{post.title}</h1>
      <h4>{date}</h4>
      <div>
        <Component
          components={
            {
              ...components,
            } as any
          }
        />
      </div>
    </>
  );
}
