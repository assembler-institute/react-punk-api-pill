import INITIAL_STATE from './languageState';
import { SET_LANGUAGE } from './languageTypes';

const languageReducer = (state = INITIAL_STATE, action) => {
  console.log('IMTCHLG ~ file: languageReducer.js ~ line 5 ~ languageReducer ~ action', action);
  
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
}

export default languageReducer;
