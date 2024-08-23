import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import ProjectsList from '../Components/ProjectsList';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <ProjectsList />
      <Footer />
    </>
  );
}

export default Home;