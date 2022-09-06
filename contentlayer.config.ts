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
  contentType: 'mdx',
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
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    playlistId: { type: 'string', required: false },
    date: { type: 'date', required: false },
    category: { type: 'string', required: false },
    feature: { type: 'boolean', required: false },
    description: { type: 'mdx', required: true },
    image: { type: 'string', required: false },
    tags: { type: 'json', required: false },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Work, Post],
  mdx: {
    remarkPlugins: [[remarkCodeHike, { theme }]],
    rehypePlugins: [
      rehypeSlug,
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
