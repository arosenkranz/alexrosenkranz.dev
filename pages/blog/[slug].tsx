import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import PageContainer from 'components/PageContainer';
import { allPosts } from '.contentlayer/data';
import type { Post } from '.contentlayer/types';

export default function Post({ post }: { post: Post }) {
  const Component = useMDXComponent(post.body.code);

  return (
    <PageContainer pageTitle={post.title} description={post.description} type="article">
      <h1 className="text-6xl">{post.title}</h1>
      <h4>{post.date}</h4>
      <div className="prose-neutral w-10/12">
        <Component
          components={
            {
              ...components,
            } as any
          }
        />
      </div>
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
