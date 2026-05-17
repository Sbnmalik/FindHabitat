const API_BASE_URL = "http://localhost:8081/api";

function createBasicAuthHeader(email, password) {
  const encodedCredentials = btoa(`${email}:${password}`);
  return `Basic ${encodedCredentials}`;
}

export async function registerUser(registerData) {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Registration failed.");
  }

  return data;
}

export async function loginUser(email, password) {
  const basicAuthHeader = createBasicAuthHeader(email, password);

  const response = await fetch(`${API_BASE_URL}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: basicAuthHeader,
    },
  });

  if (!response.ok) {
    throw new Error("Invalid email or password.");
  }

  const user = await response.json();

  return {
    user,
    basicAuthHeader,
  };
}