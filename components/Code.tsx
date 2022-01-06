import 'prism-themes/themes/prism-cb.min.css';
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
      <button className="text-sm text-neutral-500 hover:text-neutral-700" onClick={handleCopy}>
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
    </>
  );
}
