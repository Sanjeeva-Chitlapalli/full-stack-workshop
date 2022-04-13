import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  const [show,setshow]=useState(false)
  const [userInput,setStuff]=useState({
    name:"",
    usn:"",
    uni:""
  })
  const handleNameChange=(e)=>{
    const newObj={
      name:e.target.value,
      usn:userInput.usn,
      uni:userInput.uni,
    }
    setStuff(newObj);
  }
  const abc=()=>{ 
    setshow(true)
  }
  return (
    <div className="App">
      <input placeholder='Name' onChange={handleNameChange} value={userInput.name}/>
      {
        show
        ?
        <h1>{userInput.name}</h1>
        :
        null
      }
      <button onClick={abc}>show</button>
      <h1>name: {userInput.name}</h1>
    </div>
  );
}

export default App;
