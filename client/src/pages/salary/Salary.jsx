
import "./salary.css";
import React, { useState } from "react";

function Salary() {
  const jobList = [
    { jobTitle: "Software Engineer", location: "San Francisco, CA", salary: "$120,000" },
    { jobTitle: "Web Developer", location: "New York, NY", salary: "$90,000" },
    { jobTitle: "Data Scientist", location: "Seattle, WA", salary: "$110,000" },
    { jobTitle: "UI Designer", location: "Chicago, IL", salary: "$80,000" },
    { jobTitle: "Marketing Manager", location: "Boston, MA", salary: "$100,000" },
    { jobTitle: "Product Manager", location: "Austin, TX", salary: "$130,000" },
    { jobTitle: "Data Scientist", location: "Seattle, WA", salary: "$110,000" },
    { jobTitle: "UI Designer", location: "Chicago, IL", salary: "$80,000" },
    { jobTitle: "Marketing Manager", location: "Boston, MA", salary: "$100,000" },
    { jobTitle: "Product Manager", location: "Austin, TX", salary: "$130,000" },
    { jobTitle: "Data Scientist", location: "Seattle, WA", salary: "$110,000" },
    { jobTitle: "UI Designer", location: "Chicago, IL", salary: "$80,000" },
    { jobTitle: "Marketing Manager", location: "Boston, MA", salary: "$100,000" },
    { jobTitle: "Product Manager", location: "Austin, TX", salary: "$130,000" },
    { jobTitle: "Marketing Manager", location: "Boston, MA", salary: "$100,000" },
    { jobTitle: "Product Manager", location: "Austin, TX", salary: "$130,000" },
    { jobTitle: "Data Scientist", location: "Seattle, WA", salary: "$110,000" },
    { jobTitle: "UI Designer", location: "Chicago, IL", salary: "$80,000" },
    { jobTitle: "Marketing Manager", location: "Boston, MA", salary: "$100,000" },
    { jobTitle: "Product Manager", location: "Austin, TX", salary: "$130,000" },
    { jobTitle: "Marketing Manager", location: "Boston, MA", salary: "$100,000" },
    { jobTitle: "Product Manager", location: "Austin, TX", salary: "$130,000" },
    { jobTitle: "Data Scientist", location: "Seattle, WA", salary: "$110,000" },
    { jobTitle: "UI Designer", location: "Chicago, IL", salary: "$80,000" },
    { jobTitle: "Marketing Manager", location: "Boston, MA", salary: "$100,000" },
    { jobTitle: "Product Manager", location: "Austin, TX", salary: "$130,000" },
  ];

  const [searchSalary, setSearchSalary] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchjobTitle, setSearchjobTitle] = useState("");

  const filteredJobs = jobList.filter(job => {
    return (
      job.salary.toLowerCase().includes(searchSalary.toLowerCase()) && 
      job.location.toLowerCase().includes(searchLocation.toLowerCase())&&
      job.jobTitle.toLowerCase().includes(searchjobTitle.toLowerCase())
    );
  });

  return (
    <div>
    <div className="salarycontainer">
      <h1>Find Your Salary</h1></div>
      <div className= "search">
      
        <label htmlFor="salary">Search by salary:</label>
        <input type="text" id="salary" value={searchSalary} onChange={(e) => setSearchSalary(e.target.value)} />

        <label htmlFor="jobTitle">Search by Job:</label>
        <input type="text" id="salary" value={searchjobTitle} onChange={(e) => setSearchjobTitle(e.target.value)} />
     
     
      
        <label htmlFor="location">Search by location:</label>
        <input type="text" id="location" value={searchLocation} onChange={(e) => setSearchLocation(e.target.value)} />
      </div>
      <div className="list-container">
        <table>
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Location</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job, index) => (
              <tr className="salarytable" key={index}>
                <td>{job.jobTitle}</td>
                <td>{job.location}</td>
                <td>{job.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

}

export default Salary;
