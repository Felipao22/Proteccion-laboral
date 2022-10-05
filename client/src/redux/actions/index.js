import axios from 'axios';
import {GET_ALL_USERS, GET_USER_BY_EMAIL, POST_USER} from './actionsTypes';



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
// export const orderByName = (payload) => {
//     return {
//         type: ORDER_BY_NAME,
//         payload
//     }
// }

// export const orderByPopulation = (payload) => {
//     return {
//         type: ORDER_BY_POPULATION,
//         payload
//     }
// }

// export const orderByContinent = (continents) => {
//     return {
//         type: ORDER_BY_CONTINENT,
//         payload: continents
//     }
// }

// // export const orderByUnderPopulation = (payload) => {
// //     return{
// //         type: ORDER_BY_UNDER_POPULATION,
// //         payload: payload
// //     }
// // }

// export const getNameCountries = (name) => {
//     return async function(dispatch) {
//         try {
//             const res = await axios('/countries?name=' + name);
//             return dispatch({
//                 type: GET_NAME_COUNTRIES,
//                 payload: res.data
//             })
//         } catch (error) {
//             alert('No existe ese País')
//         }
//     }
// }


// export const getDetail = (id) => {
//     return async function (dispatch) {
//         try {
//             const res = await axios('/countries/' + id);
//             return dispatch({
//                 type: GET_DETAIL,
//                 payload: res.data
//             })
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }

// export function setDetail() {
//     return {
//         type: SET_DETAIL_COUNTRY,
//     }
// }


// export const getActivities = () => {
//     return async function(dispatch) {
//         const res = await axios.get('/activities');
//         return dispatch({
//             type: GET_ACTIVITIES,
//             payload: res.data
//         })
//     }
// }

// export const postActivity = (payload) => {
//     return async function() {
//         const res = await axios.post('/activities', payload);
//         return{
//             type: POST_ACTIVITY,
//             payload: res
//         } 
//     }
// }

// export const filterActivity = (payload) => {
//     return{
//         type: FILTER_ACTIVITY,
//         payload: payload
//     }
// }

