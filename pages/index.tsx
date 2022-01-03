import type { InferGetStaticPropsType } from 'next';
import { allWorks } from '.contentlayer/data';

import PageContainer from 'components/PageContainer';

export default function Home({ works }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageContainer
      pageTitle="Home"
      description="Hi there! I'm Alex Rosenkranz, a developer, subject matter expert, educator, and technical writer with an interest in music and design—both digital and physical."
      type="page"
    >
      <div>
        <h1 className="text-6xl">Alex Rosenkranz</h1>
        <h4 className="text-xl italic">Technical Curriculum Developer &amp; Software Engineer</h4>
        <p className="mt-5 max-w-prose font-mono">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, minus pariatur. Architecto maiores atque,
          deserunt dignissimos odio voluptas quasi nisi eum eligendi qui modi, quas magnam ipsum recusandae quos ipsam!
        </p>
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
