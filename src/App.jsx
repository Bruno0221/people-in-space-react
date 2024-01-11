import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import List from "./components/List/List.jsx";
import { uid } from "uid";
import ListItem from "./components/ListItem/ListItem.jsx";
import Button from "./components/Button/Button.jsx";
import { Portal } from "./components/Portal/Portal.jsx";

function App() {
  const [peopleCount, setPeopleCount] = useState(0);
  const [people, setPeople] = useState([]);
  const [filter, setFilter] = useState("all");
  const URL = "http://api.open-notify.org/astros.json";

  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setPeopleCount(data.number);
        setPeople(data.people);
      } catch (error) {
        console.error(error);
      }
    }
    startFetching();
  }, []);

  function handleFilterISS() {
    setFilter("ISS");
  }
  function handleFilterAll() {
    setFilter("all");
  }
  function handleFilterTiangong() {
    setFilter("Tiangong");
  }

  function handleAddPerson(data) {
    setPeople([{ ...data }, ...people]);
    setPeopleCount((people) => people + 1);
  }

  return (
    <>
      <Header count={peopleCount} />
      <Portal onAddPerson={handleAddPerson} />
      <Button onClick={handleFilterAll}>All</Button>
      <Button onClick={handleFilterISS}>ISS</Button>
      <Button onClick={handleFilterTiangong}>Tiangong</Button>
      <List>
        {people
          .filter((person) =>
            filter === "all" ? person : person.craft === filter
          )
          .map((person) => (
            <ListItem key={uid()} name={person.name} />
          ))}
      </List>
    </>
  );
}

export default App;
