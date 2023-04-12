import React from "react";
import "./home.css";
import Footer from "../../components/footer/Footer";
import JobLists from "../../components/jobLists/JobLists";
import Search from "../../components/search/Search";


function Home() {
  return (

    <div>
      <header className="header">
        <div className="logo">Logo</div>
        <nav className="nav">
          <a href="#sallama">Link 1</a>
          <a href="#sallama1">Link 2</a>
          <a href="#sallama2">Link 3</a>
        </nav>
      </header>
      <Search />
      <JobLists />
      <Footer />
    </div>
  );
}

export default Home;