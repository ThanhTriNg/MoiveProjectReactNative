import { GETALL_MOVIES, UPDATE_MOVIE } from "../actions/movieAction";
import { CREATE_MOVIE } from "../actions/movieAction";

const initialState ={
    movies : [],
    selectmovie : {},
}

export const moviesReducer = ( state = initialState,action) => {
    switch(action.type){
        case  GETALL_MOVIES : 
        {
            return{
                ...state,
                movies: action.payload,
            };
        };
        case CREATE_MOVIE : {
            return{
                ...state,
                movies : [...state.movies,action.payload],
            }
        };
        case UPDATE_MOVIE :
            return {
                ...state,...action.payload.state,
            }
        default:
             // trả lại trạng thái ban đầu
            return {...state}
                   
            }
    }

