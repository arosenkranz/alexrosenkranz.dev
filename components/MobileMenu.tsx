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
            'transition-background border-b border-dark p-4 last:border-0 hover:bg-dark hover:text-light dark:border-light dark:hover:bg-light dark:hover:text-dark',
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
      <button className="relative top-1 left-5" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
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
          'fixed top-[63px] left-0 z-50 h-0 w-full bg-light transition-all duration-1000 ease-in-out dark:bg-dark ',
          isOpen ? 'h-screen translate-x-0' : ' translate-x-[-120%]',
        )}
      >
        {isOpen && (
          <div className="mx-auto flex w-full flex-col px-3">
            {items.map((item, i) => (
              <MobileNavItem key={item.href} href={item.href} text={item.text} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
