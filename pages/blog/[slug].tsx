import { allPosts, Post as TPost } from 'contentlayer/generated';
import PageContainer from 'components/PageContainer';
import BlogPost from 'layouts/BlogPost';
import { getSinglePlaylist } from 'lib/spotify-api';

interface Props extends TPost {
  externalUrl?: string;
  externalUri?: string;
}

export default function Post({ post }: { post: Props }) {
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
  if (post?.playlistId) {
    const response = await getSinglePlaylist(post.playlistId);
    const spotifyData = await response.json();
    post.image = spotifyData.images[0]?.url || '';
    return { props: { post, spotifyData } };
  }
  return { props: { post } };
}
