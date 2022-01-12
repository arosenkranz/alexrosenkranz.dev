import styles from 'styles/MobileMenu.module.css';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

import type { MenuItem } from 'lib/types';

function MobileNavItem({ href, text, delay }: { href: string; text: string; delay: number }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <>
      <Link href={href}>
        <a
          className={cn(
            'p-4 border-b border-neutral-800 dark:border-neutral-100 last:border-0 transition-all duration-500',
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
      <button className="" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </button>

      <div
        className={cn(
          'fixed h-0 top-[62px] left-0 w-full z-50 transition-all ease-in-out duration-700 bg-neutral-100 dark:bg-neutral-800 ',
          isOpen ? 'h-screen translate-x-0' : ' translate-x-[-120%]',
        )}
      >
        {isOpen && (
          <div className="flex flex-col w-11/12 mx-auto">
            {items.map((item, i) => (
              <MobileNavItem key={item.href} href={item.href} text={item.text} delay={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
