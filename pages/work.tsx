import type { InferGetStaticPropsType } from 'next';
import { allWorks } from 'contentlayer/generated';
import PageContainer from 'components/PageContainer';
import WorkList from 'layouts/WorkList';

export default function Work({ works }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageContainer pageTitle="Work" description="" type="page">
      <WorkList works={works} />
    </PageContainer>
  );
}

export function getStaticProps() {
  return {
    props: {
      works: allWorks.filter((work) => work.public),
    },
  };
}
