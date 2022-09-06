import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';
import { format } from 'date-fns';
import { Post } from 'contentlayer/generated';

const descriptionComponents = {
  p: (props: any) => <p className="description" {...props} />,
};

export default function PostListItem({ post }: { post: Post }) {
  const Description = useMDXComponent(post.description.code);
  return (
    <article className="col-span-full mb-5 w-full border-b border-dotted border-dark first:mt-3 last:border-0 dark:border-light">
      <Link href={`/blog/${post.slug}`}>
        <a>
          {post.image && (
            <div className="group relative mb-5 h-80 w-full">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-lg grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0"
              />
              <div className="absolute inset-0 rounded-lg bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-500 ease-in-out group-hover:backdrop-blur-0"></div>
              <div className="absolute inset-0 flex flex-col items-start justify-end p-4 text-white">
                <h2 className="mb-0 text-4xl font-extralight">{post.title}</h2>
                {/* print post category */}
                {post.category && <span className="text-sm font-light">{post.category}</span>}
                <Description components={descriptionComponents} />
                {/* print theme-aware tags */}
                {post.tags && (
                  <div className="flex flex-wrap">
                    {post.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="mr-1 mb-1 rounded-sm bg-neutral-800 px-2 py-1 text-sm dark:bg-gray-200 dark:text-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
          {/* if no image exists, just show title and date */}
          {!post.image && (
            <div className="flex flex-col items-start justify-end p-3 text-white">
              <h2 className="text-4xl">{post.title}</h2>
            </div>
          )}
        </a>
      </Link>
    </article>
  );
}

{
  /* <Link href={`/blog/${post.slug}`}>
  <a className="rounded-sm bg-neutral-600 px-3 py-1  font-light text-light transition-all duration-200 ease-in-out hover:bg-dark hover:text-neutral-200 dark:text-light dark:hover:bg-light dark:hover:text-dark ">
    Read more
  </a>
</Link> */
}
