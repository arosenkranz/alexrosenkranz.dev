import 'prism-themes/themes/prism-night-owl.min.css';
import { ReactNode, useRef, useState, useEffect } from 'react';
import copyToClipboard from 'lib/copy-to-clipboard';

export default function Code(props: { className: string; children: ReactNode[] }) {
  const ref = useRef<HTMLPreElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => setIsCopied(false), 4000);
    }
  }, [isCopied]);

  function handleCopy() {
    if (ref.current) {
      copyToClipboard(ref.current?.textContent || '');
      setIsCopied(true);
    }
  }

  return (
    <>
      <span ref={ref}>{props.children}</span>
      <div className="w-full flex">
        <button
          className="text-sm ml-auto px-2 py-1 rounded-sm text-neutral-800 bg-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 transition-colors duration-200"
          onClick={handleCopy}
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </>
  );
}
