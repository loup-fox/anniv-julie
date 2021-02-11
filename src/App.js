import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { intervalToDuration } from "date-fns";

function App() {
  const [diff, setDiff] = useState(null);

  useEffect(() => {
    setInterval(() => {
      setDiff(
        intervalToDuration({ end: new Date(2021, 2, 27), start: new Date() })
      );
    }, 100);
  });

  return (
    <div className="App">
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ fontSize: "4rem" }}>Pas encore!</div>
        {diff && (
          <>
            <div style={{ fontSize: "2rem" }}>
              C'est dans {diff.days} jours et {diff.hours} heures
            </div>
            <div style={{ fontSize: "1.5rem" }}>
              {diff.minutes} minutes et {diff.seconds} secondes.
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
