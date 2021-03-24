import { useState, useEffect } from 'react';

import { saveFavourites, loadFavourites } from '../controllers/beers';

const useFavouriteBeers = () => {
  const [favourites, setFavourites] = useState({});

  useEffect(() => {
    loadDbFavourites();
  }, []);

  const loadDbFavourites = async () => {
    const dbFavourites = await loadFavourites();
    setFavourites(dbFavourites)
  }

  const toggleFavourite = async (id) => {
    const dbFavourites = await loadFavourites();
    saveFavourites({
      ...dbFavourites,
      [id]: !dbFavourites[id]
    });
    loadDbFavourites();
  }

  return {
    favourites,
    toggleFavourite
  }
}

export default useFavouriteBeers;