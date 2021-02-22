import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <main className="page-wrapper">
      <Header />
      <Projects />
      <Footer />
    </main>
  );
};

export default Home;
