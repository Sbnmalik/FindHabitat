const BASE_URL = 'http://localhost:8081/api/houses';

export async function getAllHouses() {
      const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch houses");
  }
  return response.json();

}
export async function getHouseById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch house");
  }
  return response.json();
}
export async function createHouse(houseData) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(houseData),
  });

  if (!response.ok) {
    throw new Error("Failed to create house");
  }

  return response.json();
}
export async function updateHouse(id, houseData) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(houseData),
  });

  if (!response.ok) {
    throw new Error("Failed to update house");
  }

  return response.json();
}
export async function deleteHouse(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete house");
  }
}
