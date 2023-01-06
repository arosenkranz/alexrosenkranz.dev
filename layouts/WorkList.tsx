import type { Work } from 'contentlayer/generated';
import WorkItem from 'components/WorkItem';

export default function WorkList({ works }: { works: Work[] }) {
  return (
    <section className="mx-auto w-full">
      <div>
        <h1 className="mb-3 text-6xl">Work</h1>
        <p className="text-lg">What I'm doing, what I've done, and what piques my interest.</p>
      </div>
      <div>
        {works
          .sort((a, b) => a.order - b.order)
          .map((work) => (
            <WorkItem key={work._id} {...work} />
          ))}
      </div>
    </section>
  );
}
