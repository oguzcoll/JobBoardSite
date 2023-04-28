import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Options from "./pages/options/Options";
import EmployeeRegister from "./pages/employeeRegister/EmployeeRegister";
import EmployeeLogin from "./pages/employeeLogin/EmployeeLogin";
import AboutPage from "./pages/aboutPage/aboutPage";
import Salary from "./pages/salary/Salary";
import Modal from "./components/Modal/Modal";
import EmployerRegister from "./pages/employerRegister/EmployerRegister";
import EmployerLogin from "./pages/employerLogin/EmployerLogin";

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
          <Route path="/employerLogin" element={<EmployerLogin />}></Route>
          <Route
            path="/employerRegister"
            element={<EmployerRegister />}
          ></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/salary" element={<Salary />}></Route>
          <Route path="/detail" element={<Modal />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
