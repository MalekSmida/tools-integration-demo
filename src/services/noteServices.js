import Http from './Http';

async function getNotes() {
  const res = await Http.get('/posts');
  return res.data;
}

export { getNotes };
