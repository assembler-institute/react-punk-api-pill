import { SET_LANGUAGE } from './languageTypes';

const setLanguage = (language) => {
  return { type: SET_LANGUAGE, payload: language };
} 

export {
  setLanguage
}
