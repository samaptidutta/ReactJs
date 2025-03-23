import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// function MyApp(){
//     return  (
//         <div>
//             <h1>Samapti Dutta|hello</h1>
//         </div>
//     )
// }


// const myAnotherElement = (
//     <a href="https://google.com" target="_blank">Visit google</a>
    
// )

//variable injection inside the object

const anotherUser="Samapti Dutta"
const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'Visit google ',
    anotherUser
)


createRoot(document.getElementById('root')).render(

    // <App />
    // <MyApp/>
    // myAnotherElement
    reactElement

)
