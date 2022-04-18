import Http from './Http';

async function loginService() {
  const res = await Http.get('/users/1');
  return res.data;
}

async function loadUserService(jwtToken) {
  // should set jwtoken in header
  const res = await Http.get('/users/1', {
    headers: {
      Authorization: jwtToken
    }
  });
  return res.data;
}

export { loginService, loadUserService };
