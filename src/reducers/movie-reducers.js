import * as actionType from '../actions/actionType';

const initialState = {
    searchText: '',
    movies : '',
    loading: false
}


const movieReducers = ( state = initialState, action ) => {
    console.log('reducer.. with action type: ' + action.type)
    switch( action.type ) {
        case actionType.SET_LODER:
            return { 
                ...state,
                loading: action.payLode
            }
        case actionType.SAVE_MOVIE:
            return {
                ...state,
                movies:action.payLode
            }
        default:
            return state
    } 
}

export default movieReducers;