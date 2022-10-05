import { GET_ALL_USERS, POST_USER, GET_USER_BY_EMAIL } from "../actions/actionsTypes";

const initialState = {
    user: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return{
                ...state,
                user: action.payload
            }
        case GET_USER_BY_EMAIL:
            return{
                ...state,
                user: action.payload
            }
        case POST_USER:
            return{
                ...state,
                user: action.payload
            }
        default:
            return {...state};
    }
}

export default rootReducer;