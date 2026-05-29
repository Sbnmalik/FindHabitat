const USER_KEY = "findhabitat_user";
const TOKEN_KEY = "findhabitat_token";

export function saveAuthData(authResponse) {
  localStorage.setItem(TOKEN_KEY, authResponse.token);
  localStorage.setItem(USER_KEY, JSON.stringify(authResponse.user));
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}
export function getCurrentUser() {
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;

}

export function isAuthenticated() {
  return !!localStorage.getItem(TOKEN_KEY);
}

export function clearAuthData() {
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(TOKEN_KEY);
}