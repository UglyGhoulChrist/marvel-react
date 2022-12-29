import { useState, useEffect } from "react";
import Card from "./Card";
import styles from "./Cards.module.scss";
// Загрузка с файла
// import { characters } from "../data/data.js";
import Title from "./Title";

function Cards() {
  const URL = "https://bravevillainousexponents.dbronskih.repl.co/characters";
  const [characters, setCharacters] = useState([]);
  // const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((characters) => setCharacters(characters))
      // .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className={styles.list}>
      {loading ? (
        <Title title="Loading..." />
      ) : (
        characters.map((character) => (
          <Card {...character} key={character.id} />
        ))
      )}
    </div>
  );
}

export default Cards;
