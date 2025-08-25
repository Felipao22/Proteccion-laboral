
import { COOKIE_PATH } from "./cookieConfig.js";

// Función para configurar una cookie
export const setCookie = (name, value, options = {}) => {
  const oneHourFromNow = new Date(Date.now() + 60 * 60 * 1000); // Caduca en 1 hora
  const cookieOptions = {
    path: COOKIE_PATH,
    sameSite: "strict",
    secure: true,
    expires: oneHourFromNow.toUTCString(), // Establece la fecha de vencimiento como una cadena UTC
    ...options,
  };
  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  for (const optionKey in cookieOptions) {
    if (!cookieOptions[optionKey]) {
      continue;
    }
    cookie += `; ${optionKey}`;
    if (cookieOptions[optionKey] !== true) {
      cookie += `=${cookieOptions[optionKey]}`;
    }
  }

  document.cookie = cookie;
};

  export const getCookie = (name) => {
    const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
    for (const cookie of cookies) {
      if (cookie.startsWith(`${name}=`)) {
        return decodeURIComponent(cookie.substring(name.length + 1));
      }
    }
    return null;
  };
  
  // Función para eliminar una cookie
  export const deleteCookie = (name) => {
    setCookie(name, "", { expires: new Date(0) });
  };

  //token

  export const setToken = (name, value, options = {}) => {
    const oneHourFromNow = new Date(Date.now() + 60 * 60 * 1000);
    const cookieOptions = {
      path: COOKIE_PATH,
      sameSite: "strict",
      secure: true,
      expires: oneHourFromNow.toUTCString(), // Establece la fecha de vencimiento como una cadena UTC
      ...options,
    };
  
    if (cookieOptions.expires instanceof Date) {
      cookieOptions.expires = cookieOptions.expires.toUTCString();
    }
  
    let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  
    for (const optionKey in cookieOptions) {
      if (!cookieOptions[optionKey]) {
        continue;
      }
      cookie += `; ${optionKey}`;
      if (cookieOptions[optionKey] !== true) {
        cookie += `=${cookieOptions[optionKey]}`;
      }
    }
  
    document.cookie = cookie;
  };
  
  // Función para obtener el valor de una cookie
  export const getToken = (name) => {
    const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
    for (const cookie of cookies) {
      if (cookie.startsWith(`${name}=`)) {
        return decodeURIComponent(cookie.substring(name.length + 1));
      }
    }
    return null;
  };
  
  // Función para eliminar una cookie
  export const deleteToken = (name) => {
    setCookie(name, "", { expires: new Date(0) });
  };
  