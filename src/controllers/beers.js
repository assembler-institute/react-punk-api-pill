import easyFetch from '../services/api';
import { saveItem, getItem } from '../services/database';

const DATABASE_ITEM_NAME = 'BEERS_FAV'
const API_BASE_URL = 'https://api.punkapi.com/v2';
const MAX_ELEMENTS = 325;
const CACHE = {}

async function getBeers(page, maxAbv = 100) {
  const fetchUrl = `${API_BASE_URL}/beers?abv_lt=${maxAbv}&page=${page}`
  if (CACHE[fetchUrl]) return CACHE[fetchUrl];

  const beers = await easyFetch(fetchUrl);

  const beersParsed = beers.map(beer => ({
    id: beer.id,
    name: beer.name,
    tagline: beer.tagline,
    imageUrl: beer.image_url,
    abv: beer.abv
  }))

  CACHE[fetchUrl] = beersParsed;

  return beersParsed;
}

function isPrevDisabled(page) {
  return page <= 1
}

function isNextDisabled(page, perPage = 25){
  return page * perPage >= MAX_ELEMENTS;
}

function toggleFavourite(id) {
  let userFavourites = getItem(DATABASE_ITEM_NAME);
  const idIndex = userFavourites.indexOf(id);

  if (idIndex >= 0) {
    userFavourites.splice(idIndex, 1);
  } else {
    userFavourites.push(id);
  }
  saveItem(DATABASE_ITEM_NAME, userFavourites);
}

function isFavourite(id) {
  let userFavourites = getItem(DATABASE_ITEM_NAME);
  const idIndex = userFavourites.indexOf(id);

  return idIndex >= 0
}

function saveFavourites(favourites) {
  saveItem(DATABASE_ITEM_NAME, favourites);
}

function loadFavourites() {
  return new Promise(resolve => resolve(getItem(DATABASE_ITEM_NAME)));
}

// { success: true, error: '', data: data }

export {
  getBeers,
  isPrevDisabled,
  isNextDisabled,
  toggleFavourite,
  isFavourite,
  saveFavourites,
  loadFavourites
}