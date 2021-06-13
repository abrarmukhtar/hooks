import React,{useState} from "react";

const Todo = () => {
    const [data, setData] = useState("");
    const [fdatam, setFdata] = useState("");

    const [email, setEmail]= useState("");
    const [femail, setFEmail]= useState("");
    
    const inputData= (e)=>{
        setEmail(e.target.value)
    }
    const dataSubmit= ()=>{
        setFEmail(email);    
        setFdata(data);
    

    }
  return (
    <div>
      <h1>This Is Todo: {fdatam}</h1>
      <h2>This is Email: {femail}</h2>
      <input type="text" onChange={(e)=>{
          setData(e.target.value);
      }} value ={data}/>
      <br />
      <input type="text" onChange={inputData} value={email}/>
      <br/>
      <button type="submit" onClick={dataSubmit}>Submit</button>
    </div>
  );
};
export default Todo;
