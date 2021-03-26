import { createStore, compose } from 'redux';
import reducers from './reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middlewared = compose(devTools);
const store = createStore(reducers, middlewared) //middleware

export default store;
