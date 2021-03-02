import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

import { getAllFilesFrontMatter } from '../lib/mdx';

const Home = ({ projectList }) => {
  return (
    <Layout>
      <Hero headline={'Alex Rosenkranz'}>
        <p>
          Hi there! I'm Alex Rosenkranz, a developer, subject matter expert, educator, and technical writer with an
          interest in music and design&mdash;both digital and physical.
        </p>
        <p>
          I started in the development field in 2008 and since then I have held many different roles both small and
          large. I am currently a Curriculum Engineer at <strong>2U, Inc</strong> where I plan, develop, and write
          technical content for our coding program courses.
        </p>
      </Hero>
      <Projects projects={projectList} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const projectList = await getAllFilesFrontMatter('projects');
  return {
    props: {
      projectList,
    },
  };
};

export default Home;
