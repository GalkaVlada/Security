const axios = require('axios');

async function fetchPosts() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
}

test('API повертає масив постів', async () => {
  const posts = await fetchPosts();
  expect(Array.isArray(posts)).toBe(true);
  expect(posts.length).toBeGreaterThan(0);
});
