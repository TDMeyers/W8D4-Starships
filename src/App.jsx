import { useState, useEffect } from "react";
import DisplayStarships from "./assets/DisplayStarships";
import "./App.css";

export default function App() {
  const [starships, setStarships] = useState([]);

  //https://swapi.dev/api/

  //"starships": "https://swapi.dev/api/starships/"

  const api = "https://swapi.dev/api/starships/";

  useEffect(() => {
    const fetchStarshipsData = async () => {
      const response = await fetch(api);
      const data = await response.json();
      setStarships(data.results);
    };
    fetchStarshipsData();
  }, []);

  return (
    <><div className="title-bar">
      <h1>STAR WARS STARSHIPS</h1>
      </div>
      <div className="display">
        <DisplayStarships starships={starships} />
      </div>
    </>
  );
}
