import tokenService from '../utils/tokenService'

const BASE_URL = '/api/chats/';


function create() {
  return fetch(BASE_URL + 'create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken(),
    },
    body: JSON.stringify({content: 'none'}),
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('There was an error creating chat');
  });
}

function submitMessage(content, id) {
  // console.log('submitting: ' + content);
  console.log(JSON.stringify({content}));
  return fetch(BASE_URL + `submitmessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application.json',
      'Authorization': 'Bearer ' + tokenService.getToken(),
    },
    body: JSON.stringify({ 
      content,
      id,
   }),
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error('Unable to send message.')
  });
}

export default {
  create,
  submitMessage
};