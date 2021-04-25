import { createContext, useState } from "react";
import { getCharacters } from "../services/characters";
import { characterList } from "../mocks/characters";

const CharacterContext = createContext();

const CharacterContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const obtainCharacters = async () => {
    setLoading(true);
    try {
      const dataCharacters = await getCharacters();
      setCharacters(dataCharacters);
    } catch (e) {
      console.log("Error al intentar obtener los personales ", e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const mockCharacters = () => {
    setCharacters(characterList);
  };

  const loadNewCharacterList = (filterArray) => {
    setCharacters(filterArray);
  };

  const data = {
    characters,
    loading,
    obtainCharacters,
    mockCharacters,
    loadNewCharacterList,
  };

  return (
    <CharacterContext.Provider value={data}>
      {children}
    </CharacterContext.Provider>
  );
};

export { CharacterContextProvider };
export default CharacterContext;
