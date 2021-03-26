import INITIAL_STATE from './userState';
import { SET_USER, CLEAR_USER } from './userTypes';

const userReducer = (state = INITIAL_STATE, action) => {
  console.log('IMTCHLG ~ file: userReducer.js ~ line 5 ~ userReducer ~ action', action);
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload }

    case CLEAR_USER:
      return null;

    default:
      return state;
  }
}

export default userReducer;
