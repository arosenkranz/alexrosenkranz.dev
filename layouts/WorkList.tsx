import type { Work } from 'contentlayer/generated';
import WorkItem from 'components/WorkItem';

export default function WorkList({ works }: { works: Work[] }) {
  return (
    <section className="mx-auto w-screen max-w-3xl">
      <div>
        <h1 className="mb-3 text-6xl font-light italic">Work</h1>
        <p>
          Since I primarily work in the field of technical curriculum development, I find it important (and exciting) to
          stay up to date with new technologies, trends, and techniques in software development. Below are some of the
          projects I've worked on (some finished, most not).
        </p>
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
