import { allPosts } from '.contentlayer/data';
import type { Post } from '.contentlayer/types';

import PageContainer from 'components/PageContainer';
import BlogPost from 'layouts/BlogPost';

export default function Post({ post }: { post: Post }) {
  return (
    <PageContainer pageTitle={post.title} description={post.description} type="article">
      <article className="prose-neutral w-full">
        <BlogPost post={post} />
      </article>
    </PageContainer>
  );
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  return { props: { post } };
}
