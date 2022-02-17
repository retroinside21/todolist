import axios from "axios";
import { CREATE_USERS , FETCH_USERS , HIDE_USERS , SHOW_USERS , DELETE_USERS , TOOGGLEDONE_USERS } from "./types";

export const  createUsers = (user) => {
    return {
        type: CREATE_USERS,
        payload: user
    }
}

export const  deleteUsers = (id) => {
    return {
        type: DELETE_USERS,
        payload: id
    }
}


export const toogleDone = (id) =>{
    return{
        type: TOOGGLEDONE_USERS,
        payload: id
    }
}

export const showLoader = () =>{
    return {
        type : SHOW_USERS
    }
}

export const hideLoader = () =>{
    return {
        type : HIDE_USERS
    }
}
export const fetchedUsers = () => {
    return async dispatch => {
        dispatch(showLoader())
        await axios.get(`https://jsonplaceholder.typicode.com/todos/`)
        .then(result => {
              dispatch({type: FETCH_USERS, payload: result.data})
        })
        .catch(e => {console.log(e.message)})
        dispatch(hideLoader())
    }
}