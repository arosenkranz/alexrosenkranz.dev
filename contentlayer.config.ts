import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';

import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { remarkCodeHike } from '@code-hike/mdx';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const theme = require('shiki/themes/vitesse-dark.json');

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
};

const Work = defineDocumentType(() => ({
  name: 'Work',
  filePathPattern: 'Work/**/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    date: { type: 'string', required: false },
    builtWith: { type: 'json', required: false },
    deployedUrl: { type: 'string', required: false },
    githubUrl: { type: 'string', required: false },
    public: { type: 'boolean', required: false },
    order: { type: 'number', required: true },
  },
  computedFields,
}));

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'Posts/**/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: false },
    category: { type: 'string', required: false },
    feature: { type: 'boolean', required: false },
    description: { type: 'string', required: true },
    image: { type: 'string', required: false },
    tags: { type: 'json', required: false },
  },
  computedFields,
}));

const Music = defineDocumentType(() => ({
  name: 'Music',
  filePathPattern: 'Music/**/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    playlists: { type: 'json', required: true, array: true },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Work, Post, Music],
  mdx: {
    remarkPlugins: [remarkGfm, [remarkCodeHike, { theme }]],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,

      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});
