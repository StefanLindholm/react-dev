import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Game from "./Components/Game/Game";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
      </div>

      <br />
      <hr />
      <br />
      <br />

      <Game />
    </>
  );
}

export default App;
