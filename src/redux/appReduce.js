import { HIDE_USERS, SHOW_USERS } from "./types"

const initialState = {
    loading: false
}


export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_USERS: 
            return {...state, loading: true}
        case HIDE_USERS: 
            return {...state, loading: false}
        default : return state
    }
}