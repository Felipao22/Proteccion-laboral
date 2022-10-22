import {
  GET_ALL_USERS,
  POST_USER,
  GET_USER_BY_EMAIL,
  GET_ACTIVE_USER,
  CLEAN_USERS,
  ACTIVATE_USER,
  POST_LOGIN,
} from "../actions/actionsTypes";

const initialState = {
  user: [],
  activeUser: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        user: action.payload,
      };
    case GET_USER_BY_EMAIL:
      return {
        ...state,
        user: action.payload,
      };
    case POST_USER:
      return {
        ...state,
        user: action.payload,
      };
    case POST_LOGIN:
        // console.log(action.payload)
            return {
              ...state,
              user: action.payload,
            };
    case GET_ACTIVE_USER:
      let userActive = state.user;
      return {
        ...state,
        user: userActive,
      };
    case CLEAN_USERS:
      return {
        ...state,
        user: "clean",
      };
    case ACTIVATE_USER:
      return {
        ...state,
        activeUser: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
