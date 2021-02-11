import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import photo from "./photo_julie.jpeg";
import { intervalToDuration } from "date-fns";

function Value(props) {
  return (
    <span>
      {props.value} {props.value > 1 ? props.plural : props.singular}
    </span>
  );
}

function App() {
  const [diff, setDiff] = useState(null);

  useEffect(() => {
    setInterval(() => {
      setDiff(
        intervalToDuration({ end: new Date(2021, 2, 27), start: new Date() })
      );
    }, 100);
  });

  function Days() {
    return <Value value={diff.days} plural="jours" singular="jour" />;
  }
  function Hours() {
    return <Value value={diff.hours} plural="heures" singular="heure" />;
  }
  function Minutes() {
    return <Value value={diff.minutes} plural="minutes" singular="minute" />;
  }
  function Seconds() {
    return <Value value={diff.seconds} plural="secondes" singular="seconde" />;
  }

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
        <img src={photo} />
        <div style={{ fontSize: "4rem" }}>Pas encore!</div>
        {diff && (
          <>
            <div style={{ fontSize: "2rem" }}>
              C'est dans <Days /> et <Hours />
            </div>
            <div style={{ fontSize: "1.5rem" }}>
              <Minutes /> et <Seconds />.
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
