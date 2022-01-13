import { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import type { MenuItem } from 'lib/types';

function MobileNavItem({ href, text }: { href: string; text: string }) {
  return (
    <>
      <Link href={href}>
        <a
          className={cn(
            'p-4 border-b border-neutral-800 dark:border-neutral-100 last:border-0 hover:bg-neutral-800 hover:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-800 transition-background',
          )}
        >
          {text}
        </a>
      </Link>
    </>
  );
}

export default function MobileMenu({ items }: { items: MenuItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="visible md:hidden">
      <button className="relative top-1" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isOpen ? (
            <g className="transition-all">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </g>
          ) : (
            <g className="transition-all">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </g>
          )}
        </svg>
      </button>

      <div
        className={cn(
          'fixed h-0 top-[63px] left-0 w-full z-50 transition-all duration-1000 ease-in-out bg-neutral-100 dark:bg-neutral-800 ',
          isOpen ? 'h-screen translate-x-0' : ' translate-x-[-120%]',
        )}
      >
        {isOpen && (
          <div className="flex flex-col w-11/12 mx-auto">
            {items.map((item, i) => (
              <MobileNavItem key={item.href} href={item.href} text={item.text} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
