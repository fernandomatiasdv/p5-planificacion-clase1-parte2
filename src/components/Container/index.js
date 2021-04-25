import { useContext, useEffect } from "react";
import CharacterContext from "../../contexts/CharactersContext";
import Card from "../Card";
import "./style.css";

const Container = () => {
  useEffect(() => {
    console.log("Container characters", characters);
  });
  const { characters } = useContext(CharacterContext);
  return (
    <div className="container">
      {characters &&
        characters.length > 0 &&
        characters.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            image={character.image}
          />
        ))}
    </div>
  );
};

export default Container;
