import {  GET_COUNTRY } from "./actionsTypes";
//estado inicial
const initialState = {
    countriesAll: [],
    countries: [],
    details: {},
    activities: [],
}

function reducer(state = initialState, {type, payload} ){
    switch(type){
        
        case GET_COUNTRY:
            return {...state, countries: payload, countriesAll: payload};

        default: return {...state};
    }

}

export default reducer;