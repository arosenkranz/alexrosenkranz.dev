import type { InferGetStaticPropsType } from 'next';
import { allPosts } from '.contentlayer/data';
import { Post } from '.contentlayer/types';

import PageContainer from 'components/PageContainer';

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(posts);
  return (
    <PageContainer
      pageTitle="Home"
      description="Hi there! I'm Alex Rosenkranz, a developer, subject matter expert, educator, and technical writer with an interest in music and design—both digital and physical."
      type="page"
    >
      <section className="max-w-prose">
        <h1 className="text-6xl">Alex Rosenkranz</h1>
        <h4 className="text-xl italic">Technical Curriculum Developer</h4>
        <p className="mt-5">
          Currently at{' '}
          <a href="https://datadoghq.com" target="_blank" rel="noreferrer noopener">
            Datadog
          </a>{' '}
          on the community team, where I help users learn how to use Datadog tools and services to improve their
          observability practices.
        </p>
        <p>
          I enjoy teaching about web development and design, curating{' '}
          <a href="https://open.spotify.com/user/alexrosenkranz" target="_blank" rel="noopener noreferrer">
            Spotify playlists
          </a>
          , and learning about new technologies and tools.
        </p>
      </section>
      <section>
        <h2 className="text-2xl">Recent Posts</h2>
        <ul className="list-disc list-inside">
          {posts.map((post: Post) => (
            <li key={post.slug}>
              <a href={`/posts/${post.slug}`}>{post.title}</a>
            </li>
          ))}
        </ul>
      </section>
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
