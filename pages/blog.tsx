import type { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { allPosts } from '.contentlayer/data';

import PageContainer from 'components/PageContainer';

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageContainer pageTitle="Blog" description="@TODO: Write a description" type="page">
      <h1 className="text-6xl">Blog</h1>

      <div>
        {posts.map((post) => (
          <div
            key={post._id}
            className=" max-w-3xl py-5 border-b border-dotted border-neutral-900 last:border-0 dark:border-neutral-50"
          >
            <h2 className="text-3xl">{post.title}</h2>
            <p className=" text-base">{post.description}</p>
            <Link href={`/blog/${post.slug}`}>
              <a className="text-neutral-500">Read more</a>
            </Link>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: allPosts,
    },
  };
}
