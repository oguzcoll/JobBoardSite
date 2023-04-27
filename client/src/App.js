import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Options from "./pages/options/Options";
import EmployeeRegister from "./pages/employeeRegister/EmployeeRegister";
import EmployeeLogin from "./pages/employeeLogin/EmployeeLogin";
import JobDetails from "./pages/jobDetails/JobDetails";
import Modal from "./components/Modal/Modal";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Options />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/employeeLogin" element={<EmployeeLogin />}></Route>
          <Route
            path="/employeeRegister"
            element={<EmployeeRegister />}
            

          ></Route>
          <Route path="/jobDetails" element={<JobDetails />}></Route>
          <Route path="/modal" element={<Modal />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
