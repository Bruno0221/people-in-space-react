import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [peopleCount, setPeopleCount] = useState(0);
  const URL = "http://api.open-notify.org/astros.json";

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(URL);
      const data = await response.json();
      setPeopleCount(data.number);
    }
    startFetching();
  }, []);

  return (
    <>
      <h1>People in Space</h1>
      <p>There are currently {peopleCount} people in space</p>
    </>
  );
}

export default App;
