import type { Work } from '.contentlayer/types';

export default function WorkList({ works }: { works: Work[] }) {
  return (
    <>
      <h1 className="text-6xl">Work</h1>
      <h4 className="text-lg">
        Here's an assortment of work I've done over the years both professionally and personally.
      </h4>
      <div>
        {works.map((work) => (
          <div key={work._id} className="my-4 border border-neutral-500">
            <h2 className="text-xl mb-3 p-2 bg-dark text-light dark:bg-light dark:text-dark">{work.title}</h2>
            <p className="text-base p-2">{work.description}</p>
            <div className="grid grid-cols-12 gap-2 items-baseline my-4 p-2">
              <div className="col-span-full md:col-span-3">
                <h3 className=" text-lg font-normal">Built With:</h3>
              </div>
              <ul className="flex flex-wrap col-span-full md:col-span-9">
                {work.builtWith.map((item: string, i: number, arr: string[]) => (
                  <li key={item} className="">
                    {item}
                    {i < arr.length - 1 && '/'}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
