import React from "react";
import "./employeeLogin.css";
import logimg from '../assets/dream-job.jpg'

function EmployeeLogin() {
  return (

    <div className="employeeLogin">
      
    
    <div>
        <div className="employee-login">
            <div className="col-1">
                <h2>Login</h2>
                <span>Login And Find Your Dream Job</span>

                <form id='form' className='forms'>
                    <input type="text"  placeholder='Mail Address' />
                    
                    <input type="text"  placeholder='Password' />
                                    
                    <button className='signbtn'>Sign In</button>
                    
                </form>

                <div className="register-info">Don't you have an account?</div>
                <button className='regbtn'>Register</button>
</div>

            <div className="col-2">
            <img className='signimg' src={logimg} alt="login" />

          
            </div>

        </div>
        </div>
   
    </div>
  );

};

export default EmployeeLogin;