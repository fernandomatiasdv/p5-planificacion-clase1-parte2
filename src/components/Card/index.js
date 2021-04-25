import { useState, useContext, useEffect } from "react";
import CharacterContext from "../../contexts/CharactersContext";
import avatar from "./style";
import "./style.css";

export default function Card(props) {
  const { characters, loadNewCharacterList, loading } = useContext(
    CharacterContext
  );
  const { id, name, status, species, gender, image } = props;
  const [styleAvatar, setStyleAvatar] = useState();
  const handleClickDeleteCharater = (e) => {
    console.log("characters => ", characters);
    e.preventDefault();
    loadNewCharacterList(characters.filter((char) => char.id !== id));
  };
  useEffect(() => {
    setStyleAvatar(avatar(status, image));
  }, []);
  return (
    <div className="card">
      <header className="card-header">
        <h2>{name}</h2>
      </header>
      <main className="card-main">
        <div style={styleAvatar}></div>
        <div className="attributes">
          <div className="item">Ficha</div>
          <div className="item" onClick={handleClickDeleteCharater}>
            Eliminar
          </div>
        </div>
      </main>
    </div>
  );
}
