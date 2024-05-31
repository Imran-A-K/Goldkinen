export async function getPosts() {
  return fetch(`${import.meta.env.VITE_API_URL}/posts`)
    .then((res) => res.json())
    .then((data) => data);
}

export async function getPost(postId) {
  return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}`)
    .then((res) => res.json())
    .then((data) => data);
}

export async function getUserPosts(userId) {
  return fetch(`${import.meta.env.VITE_API_URL}/posts?userId=${userId}`)
    .then((res) => res.json())
    .then((data) => data);
}
