import { useState, useCallback,useEffect, useRef } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [len, setLen] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [strAllowed, setStrAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [buttonText,setButtonText] = useState("Copy")
  const [btnColor,setBtnColor] = useState("bg-blue-500")

  //password ref
  const passwordRef = useRef(null)

//generate the password in th input
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) {
      str += "0123456789";
    }

    if (strAllowed) {
      str += "!@#$%^&*()_+~`|}{[]:";
    }

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [len, numAllowed, strAllowed, setPassword]);

//use this function for copy the password
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
    setButtonText("Copied")
    setBtnColor("bg-green-500")
    setTimeout(()=>{
      setButtonText("Copy")
      setBtnColor("bg-blue-500")
    }
      ,1000)
  },[password])
  

    useEffect(()=>{
      passwordGenerator()
    },[len,numAllowed,strAllowed,setPassword])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500  bg-gray-800 h-28  gap-3">
        <h1 className="text-center text-white ">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 cursor-pointer " onClick={copyPasswordToClipboard}>
            {buttonText}
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          {/* Input range box */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={len}
              className="cursor-pointer"
              onChange={(e) => {
                setLen(e.target.value);
              }}
            />
            <label>Length : {len}</label>
          </div>

          {/* number checking allowed */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers </label>
          </div>
            {/* Cherecters checking allowed */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={strAllowed}
              id="charInput"
              onChange={() => {
                setStrAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Charecters </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
