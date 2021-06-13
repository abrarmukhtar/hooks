
import "./App.css";
import Todo from "./todo"
import Assignment from "./assignment";
import {useSelector, useDispatch} from 'react-redux';


const App = () => {

 const saveData = useSelector((state)=>state.saveR);


const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        
      <button onClick={(()=>dispatch({type:"save"}))}>click me {saveData}</button>
      {/* <button onClick={(()=>dispatch({type:"obj2"}))}>click me {saveobj}</button> */}
        
        <Assignment />
        
      </header>
    </div>
  );
};

export default App;
