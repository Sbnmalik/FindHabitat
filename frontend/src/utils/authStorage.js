const USER_KEY = "findhabitat_user";
const BASIC_AUTH_KEY = "findhabitat_basic_auth";

export function saveAuthData(user, basicAuthHeader) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  localStorage.setItem(BASIC_AUTH_KEY, basicAuthHeader);
}

export function getCurrentUser() {
  const storedUser = localStorage.getItem(USER_KEY);

  if (!storedUser) {
    return null;
  }

  return JSON.parse(storedUser);
}

export function getBasicAuthHeader() {
  return localStorage.getItem(BASIC_AUTH_KEY);
}

export function clearAuthData() {
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(BASIC_AUTH_KEY);
}