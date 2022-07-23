import Link from 'next/link';
import { format } from 'date-fns';
import { Post } from 'contentlayer/generated';

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <>
      <h1 className="mb-3 text-6xl">Blog</h1>
      <div className="my-4 flex flex-wrap">
        {posts.map((post) => (
          <div
            key={post._id}
            className="col-span-full mb-5 max-w-prose border-b border-dotted border-dark pb-5 last:border-0 dark:border-light"
          >
            <Link href={`/blog/${post.slug}`}>
              <a className="mb-2 text-3xl font-extralight italic">{post.title}</a>
            </Link>
            <h3 className="text-sm">
              {post.category && (
                <>
                  Category: <span className="italic">{post.category}</span>
                </>
              )}
              {post.category && post.date && ' - '}
              {post.date && format(new Date(post.date), 'MMMM dd, yyyy')}
            </h3>
            <p className="text-base">{post.description}</p>
            <Link href={`/blog/${post.slug}`}>
              <a className="rounded-sm bg-neutral-600 px-3 py-1  font-light text-light transition-all duration-200 ease-in-out hover:bg-dark hover:text-neutral-200 dark:text-light dark:hover:bg-light dark:hover:text-dark ">
                Read more
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
