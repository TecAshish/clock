// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { useState } from 'react';
const App=()=>{

  let time=new Date().toLocaleTimeString();

  const[ctime, setCtime]=useState(time);

   const UpdateTime=()=>{
    time=new Date().toLocaleTimeString();
    setCtime(time);
   };

   setInterval(UpdateTime,1000)
  return (
       <div>
         <h1>{ctime} </h1>
         
       </div>
      
    
  )
};

export default App;
