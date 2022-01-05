import styles from 'styles/MobileMenu.module.css';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

import menuItems from 'lib/menu-items';
import type { MenuItem } from 'lib/types';

export default function MobileMenu() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="visible md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
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
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <div className={cn(styles.menu, isOpen ? styles.open : styles.closed, 'fixed top-0 left-0 right-0 z-50')}>
        {menuItems.map((item: MenuItem) => (
          <Link key={item.text} href={item.href}>
            <a>{item.text}</a>
          </Link>
        ))}
      </div>
    </>
  );
}
