import type { InferGetStaticPropsType } from 'next';
import { allPosts } from '.contentlayer/data';
import BlogList from 'layouts/BlogList';

import PageContainer from 'components/PageContainer';

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageContainer pageTitle="Blog" description="" type="page">
      <BlogList posts={posts} />
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
