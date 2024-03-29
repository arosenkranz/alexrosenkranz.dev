import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';
import { Post } from 'contentlayer/generated';

const descriptionComponents = {
  p: (props: any) => <p className="description text-lg" {...props} />,
};

export default function PostListItem({ post }: { post: Post }) {
  const Description = useMDXComponent(post.description.code);
  return (
    <article className="col-span-full mb-3 w-full first:mt-3">
      <Link href={`/blog/${post.slug}`}>
        <a>
          {post.image && (
            <div className="group group relative mb-5 h-96 w-full md:h-64">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="transition-all duration-200 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-200 ease-in-out group-hover:backdrop-blur-0"></div>
              <div className="absolute inset-0 flex flex-col items-start justify-end p-2 text-white">
                {post.category && <h3 className="text-xl font-normal lowercase italic">{post.category}</h3>}

                <h2 className="mb-0 text-5xl lowercase">{post.title}</h2>
                <Description components={descriptionComponents} />
                {post.tags && (
                  <div className="flex flex-wrap">
                    {post.tags.map((tag: string) => (
                      <span key={tag} className="mr-1 mb-1 rounded bg-light px-2 py-1 text-sm lowercase text-dark">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
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
