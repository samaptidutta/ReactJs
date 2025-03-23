// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Card from './components/card.jsx'

import "./App.css";

function App() {
  let myObj={
    name:"samapti",
    age:21
  }

  // let newArr=[1,2,3,4,5]
  return (
    <>
      <h1 className="bg-green-600 text-black p-4 rounded-xl mb-2">Tailwind Test</h1>
      <Card channel="chai aur code" someOb={myObj.name} />
      <Card channel="Samapti Dutta"/>
    </>
  );
}

export default App;
