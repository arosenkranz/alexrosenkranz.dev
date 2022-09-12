import { allPosts, Post } from 'contentlayer/generated';
import BlogList from 'layouts/BlogList';
import { getSinglePlaylist } from 'lib/spotify-api';

import PageContainer from 'components/PageContainer';

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <PageContainer pageTitle="Blog" description="" type="page">
      <BlogList posts={posts} />
    </PageContainer>
  );
}

export async function getStaticProps() {
  const posts = [];

  for (const post of allPosts) {
    // if playlist, get album info
    if (post.playlistId) {
      const response = await getSinglePlaylist(post.playlistId);
      const spotifyData = await response.json();
      post.image = spotifyData.images[0]?.url || '';
      posts.push(post);
    } else {
      posts.push(post);
    }
  }

  return {
    props: {
      posts,
    },
  };
}
