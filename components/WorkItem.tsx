import type { Work } from 'contentlayer/generated';

export default function WorkItem({ _id, title, deployedUrl, githubUrl, builtWith, description }: Work) {
  return (
    <div key={_id} className="my-10 rounded-xl bg-dark bg-opacity-10 p-4 dark:bg-light dark:bg-opacity-10">
      <div className="mb-1 flex flex-wrap items-center justify-between">
        <h2 className="basis-full text-2xl underline decoration-dotted decoration-1 underline-offset-4 md:basis-9/12">
          {title}
        </h2>
        <div className="basis-full py-2 px-3 md:basis-3/12  md:text-right">
          {deployedUrl && (
            <a className="underline underline-offset-2" href={deployedUrl} rel="noreferrer noopener" target="_blank">
              Site
            </a>
          )}

          {githubUrl && deployedUrl && <span className="inline-block px-2">/</span>}

          {githubUrl && (
            <a className="underline underline-offset-2" href={githubUrl} rel="noreferrer noopener" target="_blank">
              Repo
            </a>
          )}
        </div>
      </div>
      <p className="mt-4">{description}</p>

      {builtWith.length > 0 && (
        <div className="my-2 mb-0 grid grid-cols-12 items-baseline gap-2 border-t border-dotted border-dark py-4 dark:border-light">
          <div className="col-span-full md:col-span-3">
            <h3 className="text-lg">Built With:</h3>
          </div>
          <ul className="col-span-full flex flex-wrap md:col-span-9">
            {builtWith.map((item: string, i: number, arr: string[]) => (
              <li key={item} className="">
                {item}
                {i < arr.length - 1 && <span className="inline-block px-2">/</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
