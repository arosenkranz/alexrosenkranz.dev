import { allPosts, Post as TPost } from 'contentlayer/generated';

import PageContainer from 'components/PageContainer';
import BlogPost from 'layouts/BlogPost';

export default function Post({ post }: { post: TPost }) {
  return (
    <PageContainer pageTitle={post.title} description={post.description} type="article">
      <BlogPost post={post} />
    </PageContainer>
  );
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map((p: TPost) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post: TPost) => post.slug === params.slug);
  return { props: { post } };
}
