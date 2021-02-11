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

function CalendarCase(props) {
  const [open, setOpen] = useState(props.currentDay + 1 < props.day);

  const openCase = () => {
    if (props.currentDay !== -1 && props.currentDay < props.day) {
      setOpen(true);
    } else {
      window.alert("Julie, si tu continues de te montrer insolente en tentant de tricher nous serons obligés de détruire ce site.");
    }
  };
  const gifUrl = `https://giphy.com/embed/${props.gifId}`;
  return open ? (
    <div
      style={{
        height: "75%",
        width: "75%",
        margin: "2%",
      }}
    >
      <iframe
        src={gifUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
    </div>
  ) : (
    <div
      onClick={openCase}
      style={{
        height: "75%",
        width: "75%",
        margin: "2%",
        backgroundColor: "red",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "40px",
      }}
    >
      J-{props.day}
    </div>
  );
}

function EmptyCase() {
  return (
    <div
      style={{
        height: "75%",
        width: "75%",
        margin: "2%",
      }}
    />
  );
}

function App() {
  function computeDiff() {
    return intervalToDuration({
      end: new Date(2021, 2, 27),
      start: new Date(),
    });
  }

  const [diff, setDiff] = useState(computeDiff());

  useEffect(() => {
    const t = setTimeout(() => setDiff(computeDiff()), 1000);
    return () => {
      clearTimeout(t);
    };
  });

  function Days() {
    return (
      <Value value={diff ? diff.days : -1} plural="jours" singular="jour" />
    );
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
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: "33%",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <CalendarCase
                currentDay={diff ? diff.days : -1}
                day={16}
                gifId="FYQZe82YefYje"
              />
              <CalendarCase
                currentDay={diff ? diff.days : -1}
                day={15}
                gifId="l4FGr3nzq5u0m02vm"
              />
              <CalendarCase
                currentDay={diff ? diff.days : -1}
                day={14}
                gifId="B1FAKSmfWqRA4"
              />
            </div>

            <div
              style={{
                height: "33%",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <CalendarCase currentDay={diff ? diff.days : -1} day={13} gifId="3ohfFJUMgs8m5F9qec"/>
              <CalendarCase currentDay={diff ? diff.days : -1} day={12} gifId="Rk927btUSH5eW0Hlbs"/>
              <CalendarCase currentDay={diff ? diff.days : -1} day={11} gifId="143qWPF33HtSTK"/>
            </div>

            <div
              style={{
                height: "33%",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <CalendarCase currentDay={diff ? diff.days : -1} day={10} gifId="1wqqlaQ7IX3TXibXZE"/>
              <CalendarCase currentDay={diff ? diff.days : -1} day={9} gifId="h55EUEsTG9224"/>
              <EmptyCase />
            </div>
          </div>
          <div>
            <div
              style={{
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
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: "33%",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <CalendarCase currentDay={diff ? diff.days : -1} day={8} gifId="l4KibWpBGWchSqCRy"/>
              <CalendarCase currentDay={diff ? diff.days : -1} day={7} gifId="Pjs1kqtH1KTaU"/>
              <CalendarCase currentDay={diff ? diff.days : -1} day={6} gifId="DlVB2C14gkTkI"/>
            </div>

            <div
              style={{
                height: "33%",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <CalendarCase currentDay={diff ? diff.days : -1} day={5} gifId="UE9JPTe7LySli"/>
              <CalendarCase currentDay={diff ? diff.days : -1} day={4} gifId="Jl4e4EbjO041O"/>
              <CalendarCase currentDay={diff ? diff.days : -1} day={3} gifId="RhPvGbWK78A0"/>
            </div>

            <div
              style={{
                height: "33%",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <CalendarCase currentDay={diff ? diff.days : -1} day={2} gifId="XKYjR0Hsjh5cs"/>
              <CalendarCase currentDay={diff ? diff.days : -1} day={1} gifId="Ss0x5MowFPdxXm85Bl"/>
              <EmptyCase />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            flexDirection: "row",
          }}
        >
          From FoxBrain with ♥️
        </div>
      </div>
    </div>
  );
}

export default App;
