import React from "react";
import Header from "../components/Header";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Top from "../components/Top";

const HomePage = () => {
  return (
    <div>
      <Top />
      <main className="homepage">
        <Header
          heading="Word Counter"
          subHeading="Free online character and word count Tool"
        />
        <Counter />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
