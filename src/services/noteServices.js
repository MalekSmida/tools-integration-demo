import Http from './Http';

async function getNotes() {
  const res = await Http.get('/posts');
  return res.data;
}

async function addNote() {
  const res = await Http.post('/posts');
  return res.data;
}

export { getNotes, addNote };
