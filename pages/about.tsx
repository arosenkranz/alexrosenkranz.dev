import PageContainer from 'components/PageContainer';

export default function About() {
  return (
    <PageContainer
      pageTitle="About"
      description="Hi there! I'm Alex Rosenkranz, a developer, subject matter expert, educator, and technical writer with an interest in music and design—both digital and physical."
      type="page"
    >
      <div>
        <h1 className="text-6xl">About</h1>
        <h4 className="text-xl italic">Alex Rosenkranz</h4>

        <p className="mt-5 max-w-prose font-mono">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, minus pariatur. Architecto maiores atque,
          deserunt dignissimos odio voluptas quasi nisi eum eligendi qui modi, quas magnam ipsum recusandae quos ipsam!
        </p>
      </div>
    </PageContainer>
  );
}
