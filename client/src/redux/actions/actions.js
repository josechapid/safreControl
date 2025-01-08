import axios from "axios";
import { GET_COUNTRY } from "./actionsTypes";

export const getCountry = () => {
    const endpoint = 'http://localhost:3001/countries';  
    return async (dispatch) => {
        try{
            const { data } = await axios.get(endpoint);
            dispatch({
                type: GET_COUNTRY,
                payload: data,
            });
        }catch(error){
            alert(error.message);
        }
    }
}