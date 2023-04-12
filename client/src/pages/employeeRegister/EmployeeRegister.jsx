import React from 'react'
import "./employeeRegister.css";
import signimg from './signimg.png';



 function EmployeeRegister() {

  return (

    <div className="employeeregister">
      
    
    <div>
        <div className="register">
            <div className="col-1">
                <h2>Register</h2>
                <span>Register And Find The Job</span>

                <form id='form' className='forms'>
                    <input type="text"  placeholder='Name' />
                    <input type="text" placeholder='Surname' />
                    <input type="text"  placeholder='Password' />
                    <input type="text"  placeholder='Confirm password' />
                    <input type="text" placeholder='BirthDate' />
                    <input type="text" placeholder='Graduation' />
                    <input type="text" placeholder='Mobile Number' />
                    

                   
                    <button className='signbtn'>Sign In</button>
                    
                </form>


                
                
                <div className="logininfo">Do you have an account?</div>
                <button className='logbtn'>Log In</button>
</div>



            
            <div className="col-2">
            <img className='signimg' src={signimg} alt="login" />

            
                
            </div>

        </div>
        </div>
   
    </div>
  );
};
export default EmployeeRegister;