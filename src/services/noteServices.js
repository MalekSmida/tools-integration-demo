import Http from './Http';

async function getNotes() {
  const response = await Http.get('/posts');
  return response.data;
}

async function addNote() {
  const response = await Http.post('/posts');
  return response.data;
}

export { getNotes, addNote };
