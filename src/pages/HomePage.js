import React from "react";
import Header from "../components/Header";
import Counter from "../components/Counter";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <main>
      <Header
        heading="Word Counter"
        subHeading="Free online character and word count Tool"
      />
      <Counter />
      <Footer />
    </main>
  );
};

export default HomePage;
