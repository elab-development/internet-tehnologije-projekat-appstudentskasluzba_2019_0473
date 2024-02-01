import { useState, useEffect } from 'react';
import axios from 'axios';

const usePredmeti = (url) => {

  const [predmeti, setPredmeti] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    axios.get(url)
      .then((response) => {
        setPredmeti(response.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });

  }, [url]);

  return { predmeti, isLoading, error };

};

export default usePredmeti;