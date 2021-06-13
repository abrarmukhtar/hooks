import React, { useState } from "react";

const Todo = () => {
  const [showData, setShowData] = useState(false);
  //for store input values
  const [data, setData] = useState({
    fName: "",
    lName: "",
  });
  //handle inpute values
  const inputData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: [value] });
  };
  //for store permanent data before submit
  const [fData, setFData] = useState({});
  const submitData = (e) => {
    setFData(data);
    setShowData(true);
    e.preventDefault();
  };
  return (
    <form onSubmit={submitData}>
      <div>
        {showData ? (
          <div>
            <h1>Name: {fData.fName}</h1>
            <h1>Father Name: {fData.lName}</h1>
          </div>
        ) : (
          ""
        )}
        <input
          name="fName"
          type="text"
          value={data.fName}
          onChange={inputData}
        />
        <br />
        <input
          name="lName"
          type="text"
          value={data.lName}
          onChange={inputData}
        />
        <br />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default Todo;
