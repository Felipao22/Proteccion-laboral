import { createSlice } from "@reduxjs/toolkit";
import { setCookie, getCookie, deleteCookie } from "../utils/cookieUtils.js"; // Importar funciones para manipular cookies

const initialState = {
  email: "",
  password: "",
  userId: "",
  authToken: "",
  nombreEmpresa: "",
  nombreSede: "",
  cuit:"",
  ciudad:"",
  direccion:"",
  telefono:"",
  name:"",
  lastName:"",
  accessUser:[],
  createdAt: "",
  isAdmin: false,
  isSuperAdmin: false,
  emails: [],
  emailJefe: "",
  selectedBranch: [],
  expirationTime:null
};

// export const getUserDataFromCookies = () => {
//   const userData = getCookie("user");
//   return userData ? JSON.parse(userData) : initialState;
// };
export const getUserDataFromCookies = () => {
  // Intenta obtener los datos del usuario desde las cookies
  const userDataFromCookies = getCookie("user");

  // Si los datos de usuario están en las cookies, úsalos
  if (userDataFromCookies) {
    return JSON.parse(userDataFromCookies);
  }

  // Si no hay datos en las cookies, intenta obtenerlos de sessionStorage
  const userDataFromSessionStorage = sessionStorage.getItem("user");

  // Si los datos de usuario están en sessionStorage, úsalos
  if (userDataFromSessionStorage) {
    return JSON.parse(userDataFromSessionStorage);
  }

  // Si no hay datos en las cookies ni en sessionStorage, devuelve el estado inicial
  return initialState;
};

export const userSlice = createSlice({
  name: "user",
  initialState: getUserDataFromCookies(),
  reducers: {
    setUserData: (state, action) => {
      const { email, nombreEmpresa, cuit, isAdmin, isSuperAdmin, emails, nombreSede, ciudad, direccion, telefono, accessUser,emailJefe, name, lastName } =
        action.payload;
      state.email = email;
      state.nombreEmpresa = nombreEmpresa;
      state.cuit = cuit;
      state.isAdmin = isAdmin;
      state.isSuperAdmin = isSuperAdmin;
      state.emails = emails;
      state.nombreSede = nombreSede;
      state.ciudad = ciudad;
      state.direccion = direccion;
      state.telefono = telefono;
      state.accessUser = accessUser;
      state.emailJefe = emailJefe;
      state.name = name;
      state.lastName= lastName;
      const oneHourFromNow = new Date(Date.now() + 60 * 60 * 1000);
      state.expirationTime = oneHourFromNow.toUTCString();
      setCookie("user", JSON.stringify(state)); // Guardar en la cookie
    },
    setLoginData: (state, action) => {
      const { userId, authToken, email, isAdmin, isSuperAdmin } =
        action.payload;
      state.userId = userId;
      state.authToken = authToken;
      state.email = email;
      state.isAdmin = isAdmin;
      state.isSuperAdmin = isSuperAdmin;
      const oneHourFromNow = new Date(Date.now() + 60 * 60 * 1000);
      state.expirationTime = oneHourFromNow.toUTCString();
      setCookie("user", JSON.stringify(state)); // Guardar en la cookie
    },
    setLogoutData: (state) => {
      Object.assign(state, initialState);
      deleteCookie("user"); // Eliminar la cookie
    },
    setSelectedBranch: (state, action) => {
      state.selectedBranch = action.payload;
    },
  },
});

export const { setUserData, setLoginData, setLogoutData, setSelectedBranch } =
  userSlice.actions;

export const getUser = (state) => state.user;

export default userSlice.reducer;

