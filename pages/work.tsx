import type { InferGetStaticPropsType } from 'next';
import { allWorks } from '.contentlayer/data';

import PageContainer from 'components/PageContainer';

export default function Work({ works }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageContainer pageTitle="Work" description="" type="page">
      <h1 className="text-6xl">Work</h1>
      <h4 className="text-lg">
        Here's an assortment of work I've done over the years both professionally and personally.
      </h4>
      <div>
        {works.map((work) => (
          <div
            key={work._id}
            className=" max-w-3xl py-5 border-b border-dotted border-neutral-900 last:border-0 dark:border-neutral-50"
          >
            <h2 className="text-3xl">{work.title}</h2>
            <p className=" text-base">{work.description}</p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}

export function getStaticProps() {
  return {
    props: {
      works: allWorks,
    },
  };
}
