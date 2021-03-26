import { combineReducers } from 'redux';
import user from './user/userReducer';
import language from './language/languageReducer';

const reducers = combineReducers({
  user,
  language
})

export default reducers;