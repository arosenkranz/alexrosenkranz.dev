import type { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { allPosts } from '.contentlayer/data';
import { Post } from '.contentlayer/types';

import PageContainer from 'components/PageContainer';

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageContainer
      pageTitle="Home"
      description="Hi there! I'm Alex Rosenkranz, a developer, subject matter expert, educator, and technical writer with an interest in music and design—both digital and physical."
      type="page"
    >
      <section className="max-w-prose mt-4 mb-16">
        <h1 className="text-6xl">Alex Rosenkranz</h1>
        <h4 className="text-xl italic">Technical Curriculum Developer</h4>
        <p className="mt-5">
          Currently at{' '}
          <a href="https://datadoghq.com" target="_blank" rel="noreferrer noopener">
            Datadog
          </a>{' '}
          on the community team, where I help users learn how to use Datadog tools and services to improve their own
          applications and deliver optimal user experiences.
        </p>
        <p>
          I enjoy teaching about web development and all things JavaScript, curating{' '}
          <a href="https://open.spotify.com/user/alexrosenkranz" target="_blank" rel="noopener noreferrer">
            Spotify playlists
          </a>
          , and learning about new technologies and tools.
        </p>
      </section>
      <Link href="/work" passHref>
        <section className="p-3 mb-16 border border-dashed border-dark group dark:border-light cursor-pointer">
          <a className="text-2xl font-light italic">
            See what I've worked on{' '}
            <span className="relative inline-block group-hover:translate-x-2 transition-transform">&rarr;</span>
          </a>
        </section>
      </Link>
      <section className="mb-24">
        <h2 className="text-4xl inline-block mb-8">Recent Posts</h2>
        <div className="grid grid-cols-12 grid-flow-row gap-2">
          {posts.map((post: Post) => (
            <figure key={post.slug} className="p-3 rounded-sm border col-span-full md:col-span-6 lg:col-span-4">
              <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </figure>
          ))}
        </div>
        <Link href="/blog">
          <a className="inline-block mt-4">View all posts &rarr;</a>
        </Link>
      </section>
    </PageContainer>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: allPosts.slice(0, 3),
    },
  };
}
