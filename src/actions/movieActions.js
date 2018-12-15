import * as actionType from '../actions/actionType';


export const setLoder = ( loderValue ) => {
    return {
        type: actionType.SET_LODER,
        payLode: loderValue
    }
}

export const saveMovie = ( movieValue ) => {
    return{
        type: actionType.SAVE_MOVIE,
        payLode: movieValue
    }
}