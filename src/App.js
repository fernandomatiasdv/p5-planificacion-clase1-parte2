import { useEffect, useContext } from "react";
import { Container, Searcher } from "./components";
import CharacterContext from "./contexts/CharactersContext";

function App() {
  const { obtainCharacters, characters, mockCharacters } = useContext(
    CharacterContext
  );
  useEffect(() => {
    obtainCharacters();
    //mockCharacters();
  }, []);
  useEffect(() => {
    console.log("App characters", characters);
  });
  return (
    <>
      <Searcher />
      <Container />
    </>
  );
}

export default App;
