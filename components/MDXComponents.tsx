import Image from 'next/image';
import CustomLink from 'components/CustomLink';
import Playlist from 'components/Playlist';

const MDXComponents = {
  Image,
  a: CustomLink,
  Playlist,
};

export default MDXComponents;
