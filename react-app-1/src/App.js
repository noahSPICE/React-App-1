import logo from "./logo.png";
import "./App.css";
import Item from "./myItem";
import Paragraph from "./myParagraph";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Item />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          CLICK TO JOIN CREW
        </a>
        <Paragraph />
      </header>
    </div>
  );
}

export default App;
