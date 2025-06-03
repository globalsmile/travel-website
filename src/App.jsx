// src/App.jsx
import React from 'react';
import Header from './components/Header';
import ExperienceForm from './components/ExperienceForm';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <ExperienceForm />
        <TestimonialSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
