import { useState, useEffect, useContext } from "react";
import CharacterContext from "../../contexts/CharactersContext";
import Skeleton from "../Skeleton";
import "./style.css";

export default function Searcher() {
  const [name, setName] = useState("");
  const {
    characters,
    loading,
    loadNewCharacterList,
    /*mockCharacters*/ obtainCharacters,
  } = useContext(CharacterContext);
  useEffect(() => {
    console.log("Searcher characters", characters);
  });
  useEffect(() => {
    name &&
      loading === false &&
      loadNewCharacterList(
        characters.filter((li) => {
          return li.name.match(name);
        })
      );
  }, [loading, name]);
  const handleChange = (e) => {
    obtainCharacters();
    setName(e.target.value);
  };
  return (
    <header className="layout-header">
      <form>
        <input
          name="name"
          onChange={handleChange}
          placeholder="Nombre o Apellido"
          type="search"
          maxLength={45}
        />
      </form>
    </header>
  );
}
