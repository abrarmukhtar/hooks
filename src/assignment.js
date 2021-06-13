import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import store from './store';



const Assignment = () => {

  const [data, setData] = useState({
    uname:"",
    email:""
  });



  const inputChange = (e)=>{

    const {name,value}=e.target;

    setData({
      ...data, [name]:value
    })
    
  }

  // const [uname, setUname] =useState("")
  // const dataInput = (e)=>{
    //     setUname(e.target.value)
    //     console.log(e);
    // }
    // const [email, setEmail]=useState("");
    // const emailInput= (e)=>{
      //   setEmail(e.target.value);
      //   console.log(e);
      // }
     
      
        const submitData =(e)=>{
          e.preventDefault();
          
        }
    
  return (
    <div>
         {/* <p>Name:{uname}</p>
        <p>Last Name:{email}</p> */}
      <form onSubmit={submitData} >
       <input type="text" name="uname" value={data.uname} onChange={inputChange} />
        <br />
        <input type="text" name="email" value={data.email} onChange={inputChange} />
        <br />
        <button type="submit"  >Submit</button>
      </form>
    </div>
  );
};
export default Assignment;
