import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import path from 'path';
import readingTime from 'reading-time';
import renderToString from 'next-mdx-remote/render-to-string';

import MDXComponents from '@/components/MDXComponents';

const root = process.cwd();

export const getFiles = async (contentType) => {
  return fs.readdirSync(path.join(root, '_content', contentType));
};

export async function getFileBySlug(contentType, slug) {
  const file = slug
    ? fs.readFileSync(path.join(root, '_content', contentType, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, '_content', `${contentType}.mdx`), 'utf8');

  const { data, content } = matter(file);
  const mdxData = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [require('remark-autolink-headings'), require('remark-slug'), require('remark-code-titles')],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    mdxData,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

export const getAllFilesFrontMatter = (contentType) => {
  const files = fs.readdirSync(path.join(root, '_content', contentType));

  return files.reduce((allContent, slug) => {
    const source = fs.readFileSync(path.join(root, '_content', contentType, slug), 'utf8');
    const { data } = matter(source);

    return [
      ...allContent,
      {
        ...data,
        slug: slug.replace('.mdx', ''),
      },
    ];
  }, []);
};
