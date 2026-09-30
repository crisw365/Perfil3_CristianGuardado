import { useState, useEffect } from 'react';

const API_URL = 'https://rickandmortyapi.com/api/character';

/**
 * Custom Hook para obtener personajes de la API de Rick and Morty.
 * Maneja los estados de data, loading y error usando async/await.
 * 
 * @returns {{ data: Array, loading: boolean, error: string|null }}
 */
const useFetchCharacters = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const json = await response.json();
        setData(json.results);
      } catch (err) {
        setError(err.message || 'Ocurrió un error al obtener los datos');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return { data, loading, error };
};

export default useFetchCharacters;
