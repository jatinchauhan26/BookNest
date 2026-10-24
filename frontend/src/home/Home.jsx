
import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <div id="about">
        <Banner />
      </div>

      <Freebook />

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default Home;
