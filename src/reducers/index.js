import { combineReducers } from 'redux';
import movies from './movie-reducers';

const rootReducer = combineReducers(
    {
        movies: movies
    }
);

export default rootReducer;
