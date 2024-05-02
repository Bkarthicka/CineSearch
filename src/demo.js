import { useState,useEffect } from 'react';
import './App.css';

// const Person = (props) => {
//   return (
//     <>
//     <h1>Name:{props.name}</h1>
//     <h2>Last Name: {props.last}</h2>
//     <h2>Age:{props.age}</h2>
//     </>
//   )
// }

const App=() => {
  const [counter,setCounter] = useState(0);

  useEffect(() => {
    alert('counter' + counter)
  },[counter])
  // const name = "karthicka";
  // const isNameShowing= true;
  return (
    <div className="App">

      <button onClick={()=> setCounter((prevCount)=> prevCount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=> setCounter((prevCount)=> prevCount+1)}>+</button>
      {/* <Person name={"john"} last={"Doe"} age={20}/>
      <Person name="jane" last="ken" age="20"/> */}
      {/* <h1>Hello, {name}!</h1> */}
      {/* <h1>Hello, {isNameShowing ? name : 'someone'}!</h1>
      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ):(
        <>
        <h1>test</h1>
        <h2>Ther is no name</h2>
        </>        
      )} */}
    </div>
  );
}

export default App;

