import type { InferGetStaticPropsType } from 'next';
import { allWorks } from '.contentlayer/data';
import PageContainer from 'components/PageContainer';
import WorkList from 'layouts/WorkList';

export default function Work({ works }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageContainer pageTitle="Work" description="" type="page">
      <div className="mx-auto w-screen max-w-3xl">
        <WorkList works={works} />
      </div>
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
