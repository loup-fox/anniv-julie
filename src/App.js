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


function CalendarCase(props){
  const [open, setOpen] = useState(false);
  
  const openCase = () => {
    console.log({props})
    if (props.currentDay + 1 === props.day){
      setOpen(true)
    }
  }
  const gifUrl = `https://giphy.com/embed/${props.gifId}`
  return open ? 
  <div style={{
    height: "75%",
    width: "75%",
    margin: "2%",
  }}>
    <iframe src={gifUrl} width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  </div> : 
  <div onClick={openCase} style={{
    height: "75%",
    width: "75%",
    margin: "2%",
    backgroundColor: "red",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "40px"
  }}>
    J-{props.day}
  </div> 
}

function EmptyCase(){
  return <div style={{
    height: "75%",
    width: "75%",
    margin: "2%",
  }}/>
}

function App() {
  const [diff, setDiff] = useState(null);

  useEffect(() => {
    setInterval(() => {
      setDiff(
        intervalToDuration({ end: new Date(2021, 2, 27), start: new Date() })
      );
    }, 1000);
  });

  function Days() {
    return <Value value={diff ? diff.days : -1} plural="jours" singular="jour" />;
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
          flexDirection: "row",
        }}
      >
        <div style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}>
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
            <CalendarCase currentDay={diff ? diff.days : -1} day={16} gifId="l4KibWpBGWchSqCRy"/>
            <CalendarCase currentDay={diff ? diff.days : -1} day={15}/>
            <CalendarCase currentDay={diff ? diff.days : -1} day={14}/>
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
            <CalendarCase currentDay={diff ? diff.days : -1} day={13}/>
            <CalendarCase currentDay={diff ? diff.days : -1} day={12}/>
            <CalendarCase currentDay={diff ? diff.days : -1} day={11}/>
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
            <CalendarCase currentDay={diff ? diff.days : -1} day={10}/>
            <CalendarCase currentDay={diff ? diff.days : -1} day={9}/>
            <EmptyCase/>
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
        <div style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}>
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
            <CalendarCase currentDay={diff ? diff.days : -1} day={8}/>
            <CalendarCase currentDay={diff ? diff.days : -1} day={7}/>
            <CalendarCase currentDay={diff ? diff.days : -1} day={6}/>
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
            <CalendarCase currentDay={diff ? diff.days : -1} day={5}/>
            <CalendarCase currentDay={diff ? diff.days : -1} day={4}/>
            <CalendarCase currentDay={diff ? diff.days : -1} day={3}/>
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
            <CalendarCase currentDay={diff ? diff.days : -1} day={2}/>
            <CalendarCase currentDay={diff ? diff.days : -1} day={1}/>
            <EmptyCase/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
