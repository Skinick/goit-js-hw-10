const URL = 'https://api.thecatapi.com/v1/';
const API_KEY =
  'live_jZ0nu5n8S6VnwCRIqQbou78F73kuP0K8ypzeCvwyDJXNFhtU9EdT8X7Gy3mw67V0';

export function fetchCatByBreed(breedId) {
  return fetch(`${URL}images/search?breed_ids=${breedId}&${API_KEY}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

export function fetchBreeds() {
  return fetch(`${URL}breeds?${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

