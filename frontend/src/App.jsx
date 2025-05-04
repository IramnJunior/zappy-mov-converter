import logo from "./assets/images/zappy-logo.png";
import FileUploader from "./components/fileUploader";
import "./App.css";

function App() {
  return (
    <div id="App">
      <div>
        <img src={logo} id="logo" />
      </div>
      <div>
        <FileUploader/>
      </div>
    </div>
  );
}

export default App;

// import {useState} from 'react';
// import logo from './assets/images/zappy-logo.png';
// import './App.css';
// import {Greet} from "../wailsjs/go/main/App";

// function App() {
//     const [resultText, setResultText] = useState("Please enter your name below 👇");
//     const [name, setName] = useState('');
//     const updateName = (e) => setName(e.target.value);
//     const updateResultText = (result) => setResultText(result);

//     function greet() {
//         Greet(name).then(updateResultText);
//     }

//     return (
//         <div id="App">
//             <img src={logo} id="logo" alt="logo"/>
//             <div id="result" className="result">{resultText}</div>
//             <div id="input" className="input-box">
//                 <input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text"/>
//                 <button className="btn" onClick={greet}>Greet</button>
//             </div>
//         </div>
//     )
// }

// export default App
