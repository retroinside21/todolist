import {
    CREATE_USERS,
    DELETE_USERS,
    FETCH_USERS,
    TOOGGLEDONE_USERS
} from "./types"

const initialState = {
    users: []
}

export const usersReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case CREATE_USERS: {
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        }
        case FETCH_USERS: {
            return {
                ...state,
                users: [...action.payload]
            }
        }
        case DELETE_USERS:
            return {
                ...state,
                users: [...state.users.filter(el => el.id !== action.payload)]
            }
            case TOOGGLEDONE_USERS:
                const idx = state.users.findIndex((el) => el.id === action.payload)
                const oldItem = state.users[idx]
                const newItem = {
                    ...oldItem,
                    completed: !oldItem.completed
                }
                const newArray = [
                    ...state.users.slice(0, idx),
                    newItem,
                    ...state.users.slice(idx + 1)
                ]
                return {
                    ...state,
                    users: [...newArray]
                }

                default:
                    return state
    }

}