import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <main className="page-wrapper">
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
};

export default Home;
