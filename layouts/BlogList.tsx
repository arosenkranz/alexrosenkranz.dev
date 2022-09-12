import PostListItem from 'components/PostListItem';
import { Post as TPost } from 'contentlayer/generated';

export default function BlogList({ posts }: { posts: TPost[] }) {
  return (
    <>
      <h1 className="mb-3 text-6xl">Blog</h1>
      <div className="my-4 flex flex-wrap">
        {posts
          .sort((a, b) => b.order - a.order)
          .map((post) => (
            <PostListItem key={post._id} post={post} />
          ))}
      </div>
    </>
  );
}
