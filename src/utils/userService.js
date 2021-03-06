import tokenService from './tokenService'
const BASE_URL = '/api/users/';

function signup(user) {
  return fetch(BASE_URL + 'new', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Email or username already taken.')
  })
  .then(({token}) => {
    tokenService.setToken(token);
  });
}

function login(creds) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Bad credentials.')
  })
  .then(({token}) => {
    tokenService.setToken(token);
  });
}

function logout() {
  tokenService.removeToken();
}

function getUser() {
  return tokenService.getUserFromToken();
}

export default {
  signup,
  login,
  logout,
  getUser,
};