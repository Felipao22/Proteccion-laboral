import axios from 'axios';
import {GET_ALL_USERS, GET_USER_BY_EMAIL, POST_USER, GET_ACTIVE_USER, POST_LOGIN, CLEAN_USERS, ACTIVATE_USER} from './actionsTypes';



export const getUsers = () => {
    return async function (dispatch) {
        const res = await axios('http://localhost:3001/user');
        return dispatch({
            type: GET_ALL_USERS,
            payload: res.data
        })
    }
}
export const getUserByEmail = (email) => {
    return async function (dispatch) {
      try {
        const res = await axios.get(`http://localhost:3001/user/${email}`);
        return dispatch({
          type: GET_USER_BY_EMAIL,
          payload: res.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const createUser = (body) => {
    return async function (dispatch) {
      try {
        const res = await axios.post(`http://localhost:3001/user`, body);
        return dispatch({
          type: POST_USER,
          payload: res.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const login = (body) => {
    return async function (dispatch) {
      try {
        const res = await axios.post(`http://localhost:3001/user/login`, body);
        return dispatch({
          type: POST_LOGIN,
          payload: res.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const getActiveUser = () => {
    return {
      type: GET_ACTIVE_USER,
    };
  };

  export const cleanUsers = () => {
    return { type: CLEAN_USERS };
  };

  export const activateUser = (email) => {
    return async function (dispatch) {
      try {
        const body = { active: true };
        const res = await axios.put(`http://localhost:3001/user/${email}`, body);
        return dispatch({
          type: ACTIVATE_USER,
          payload: res.data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  };
