export async function getPostComments(postId) {
  return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/comments`)
    .then((res) => res.json())
    .then((data) => data);
}
