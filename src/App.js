import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <div style={{ fontSize: "4rem" }}>
          Pas encore!
        </div>
        <div style={{ fontSize: "2rem" }}>
          C'est dans XXX.
        </div>
      </div>
    </div>
  );
}

export default App;
