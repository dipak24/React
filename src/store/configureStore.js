import {createStore} from 'redux';
import rootReducers from '../reducers';

let store = createStore(rootReducers);

export default store;