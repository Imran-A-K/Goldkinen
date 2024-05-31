export async function getUsers() {
  return fetch(`${import.meta.env.VITE_API_URL}/users`)
    .then((res) => res.json())
    .then((data) => data);
}

export async function getUser(userId) {
  return fetch(`${import.meta.env.VITE_API_URL}/users/${userId}`)
    .then((res) => res.json())
    .then((data) => data);
}
