import type { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { allWorks } from '.contentlayer/data';

import PageContainer from 'components/PageContainer';

export default function Work({ works }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageContainer pageTitle="Work" description="@TODO: Write a description" type="page">
      <div>
        {works.map((work) => (
          <div key={work._id} className="max-w-prose">
            <h2 className="text-4xl">{work.title}</h2>
            <p className=" text-base max-w-prose">{work.description}</p>
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
