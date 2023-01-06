import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import cn from 'classnames';

import MobileMenu from 'components/MobileMenu';

import menuItems from 'lib/menu-items';
import type { MenuItem } from 'lib/types';

const sunPaths = [
  'm 10.283037,286.53405 -1.3483603,1.34832 a 0.12953382,0.12953382 0 0 0 0.1834294,0.18294 l 1.3476909,-1.34832 a 0.12935123,0.12935123 0 0 0 -0.18276,-0.18294 z',
  'm 12.041471,290.52064 h -1.906944 a 0.12935122,0.12935122 0 0 0 0,0.25869 h 1.906944 a 0.12935122,0.12935122 0 0 0 0,-0.25869 z',
  'm 10.465797,294.58299 -1.3476909,-1.34833 a 0.12953141,0.12953141 0 0 0 -0.1834294,0.18293 l 1.3483603,1.34832 a 0.12935123,0.12935123 0 0 0 0.18276,-0.18292 z',
  'm 6.479452,296.34144 v -1.90681 a 0.12937727,0.12937727 0 0 0 -0.2587545,0 v 1.90681 a 0.12937727,0.12937727 0 0 0 0.2587545,0 z',
  'm 2.416979,294.76591 1.3484938,-1.34832 a 0.12935122,0.12935122 0 0 0 -0.1827605,-0.18293 l -1.3484938,1.34833 a 0.12935122,0.12935122 0 0 0 0.1827605,0.18292 z',
  'm 0.6585452,290.77933 h 1.9069434 a 0.12935122,0.12935122 0 0 0 0,-0.25869 H 0.6585452 a 0.12935122,0.12935122 0 0 0 0,0.25869 z',
  'm 2.2342185,286.71699 1.3484938,1.34832 a 0.12935122,0.12935122 0 0 0 0.1827605,-0.18294 L 2.416979,286.53405 a 0.12935122,0.12935122 0 0 0 -0.1827605,0.18294 z',
  'm 6.2206975,284.95853 v 1.90682 a 0.12937727,0.12937727 0 0 0 0.2587545,0 v -1.90682 a 0.12937727,0.12937727 0 0 0 -0.2587545,0 z',
];

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link href={href}>
      <a
        className={cn(
          isActive ? 'bg-dark text-light dark:bg-light dark:text-dark' : 'dark:text-light',
          'mr-2 hidden px-2 py-1 text-2xl font-normal text-dark transition-all duration-200 ease-in-out hover:bg-dark hover:text-light  dark:hover:bg-light dark:hover:text-dark md:inline-block',
        )}
      >
        {text}
      </a>
    </Link>
  );
}

function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className=" ml-auto mr-2 flex items-center justify-center fill-dark p-1  dark:fill-light"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          width="30px"
          viewBox="0 0 12.7 12.7"
          version="1.1"
          x="0px"
          y="0px"
        >
          <g transform="translate(0,-284.29998)">
            <path
              d="m 6.2711185,287.94985 a 2.7010013,2.7010013 0 0 0 -2.6217742,2.69988 2.7010013,2.7010013 0 1 0 5.4018538,0 2.7010013,2.7010013 0 0 0 -2.7800796,-2.69988 z m 0.078799,0.25789 v 4.88468 a 2.4423408,2.4423408 0 0 1 0,-4.88468 z"
              stroke="none"
            ></path>
          </g>
          <g transform="translate(0,-284.29998)">
            {sunPaths.map((d, i) => {
              return (
                <path
                  key={d}
                  d={d}
                  stroke="none"
                  className={cn(
                    `transition-opacity duration-1000 ease-in-out`,
                    theme === 'light' ? 'opacity-100' : 'opacity-0',
                  )}
                  style={{
                    transitionDelay: `${i * 100}ms`,
                  }}
                />
              );
            })}
          </g>
        </svg>
      )}
    </button>
  );
}

export default function Header() {
  return (
    <header className="mx-auto mt-2 w-full border-b border-dark py-4 pt-2 text-xl dark:border-light">
      <nav className="flex flex-nowrap items-center">
        <MobileMenu items={menuItems} />
        {menuItems.map((item: MenuItem) => (
          <NavItem key={item.href} href={item.href} text={item.text} />
        ))}
        <ThemeButton />
      </nav>
    </header>
  );
}
