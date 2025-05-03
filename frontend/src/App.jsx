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
        <FileUploader />
      </div>
    </div>
  );
}

export default App;
