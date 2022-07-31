import { allPosts, Post } from 'contentlayer/generated';
import BlogList from 'layouts/BlogList';

import PageContainer from 'components/PageContainer';

export default function Blog({ posts }: { posts: Post[] }) {
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
