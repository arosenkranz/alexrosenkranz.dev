import type { Work } from 'contentlayer/generated';
import WorkItem from 'components/WorkItem';

export default function WorkList({ works }: { works: Work[] }) {
  return (
    <section className="mx-auto w-screen max-w-3xl">
      <div>
        <h1 className="mb-3 text-6xl font-extralight italic">Work</h1>
        <p>
          Since I primarily work in the field of technical curriculum development, I find it important (and exciting) to
          stay up to date with new technologies, trends, and techniques in software development. Below are some of the
          projects I've worked on.
        </p>
        <p>
          I enjoy teaching myself new skills and tools just as much as I enjoy teaching others, so some of these
          projects may not be as polished as others. I find value in all of my projects, finished or not, because I
          always learn at least one new thing from each.
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
