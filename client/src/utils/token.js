export function getToken() {
    if (typeof window === 'undefined') return;
    const sessionToken = window.sessionStorage.getItem('token') || '';
    return sessionToken;
  }
  
  export function setToken(token) {
    if (typeof window === 'undefined') return;
    window.sessionStorage.setItem('token', token);
  }
  
  export function clearToken() {
    if (typeof window === 'undefined') return;
    window.sessionStorage.removeItem('token');
  }
  