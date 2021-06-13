import React, { useState } from "react";
import "./App.css";

const FormsEvents = () => {

  const [userData, setUserData] = useState({
    name:"",
    password:"",
    email:""
  });

  const [addData, setAddData]= useState({});


const inputEvent = (e)=>{
  const {name,value} = e.target;
  
  setUserData((oldData)=>{
    return {
      ...oldData,
      [name]:value,
    }
  });
  
}

const submitEvent = (e)=>{
  
  e.preventDefault();
  
  setAddData(userData);
  console.log(addData);

  
}
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Your Name is : {addData.name}</h1>
          <h2>Your Password is :{addData.password}</h2>
          <h3>Your Password is :{addData.email}</h3>
          <form onSubmit={submitEvent}>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={userData.name}
            className="input-text"
            onChange={inputEvent}
          />
          <br>
          </br>
              <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={userData.password}
            className="input-text"
            onChange={inputEvent}
          />
           <br>
          </br>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={userData.email}
            className="input-text"
            onChange={inputEvent}
          />
           <br>
          </br>
          <button
            className="btn-click"
            // onClick={(e) => {
            //   console.log(name);
            //   setFullName(name);
              // e.preventDefault();
            // }}
            type="submit"
          >
            Click Me
          </button>
          </form>
        </header>
      </div>
    </>
  );
};
export default FormsEvents;
