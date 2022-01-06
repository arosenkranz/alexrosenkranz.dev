import Image from 'next/image';
import CustomLink from 'components/CustomLink';
import Code from 'components/Code';

const MDXComponents = {
  Image,
  a: CustomLink,
  code: Code,
};

export default MDXComponents;
