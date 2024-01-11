import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import List from "./components/List/List.jsx";
import { uid } from "uid";
import ListItem from "./components/ListItem/ListItem.jsx";
import Button from "./components/Button/Button.jsx";

function App() {
  const [peopleCount, setPeopleCount] = useState(0);
  const [people, setPeople] = useState([]);
  const URL = "http://api.open-notify.org/astros.json";

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(URL);
      const data = await response.json();
      setPeopleCount(data.number);
      setPeople(data.people);
    }
    startFetching();
  }, []);

  return (
    <>
      <Header count={peopleCount} />
      <Button>All</Button>
      <Button>ISS</Button>
      <Button>Tiangong</Button>
      <List>
        {people.map((person) => (
          <ListItem key={uid()} name={person.name} />
        ))}
      </List>
    </>
  );
}

export default App;
