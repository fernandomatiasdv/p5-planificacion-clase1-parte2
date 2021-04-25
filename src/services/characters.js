import API from "./API";

const getCharacters = () => {
  const path = "/character";
  return API.get(path)
    .then((response) => Promise.resolve(response.data.results))
    .catch((error) => Promise.reject(error.response));
};

export { getCharacters };
