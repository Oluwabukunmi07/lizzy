import Hero from "../components/Hero";
import FeaturedCollections from "../components/FeaturedCollections";
import React from "react";
import AboutSnippet from "../components/LearnMore";

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedCollections />
      <AboutSnippet />
    </div>
  );
}

export default Home;
