import React from "react";
import "./home.css";
import Footer from "../../components/footer/Footer";
import JobLists from "../../components/jobLists/JobLists";
import Search from "../../components/search/Search";

function Home() {
  return (
    <div className="home">
      <div>
        <Search />
        <JobLists />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
