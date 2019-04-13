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
  return fetch(BASE_URL + 'submitmessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken(),
    },
    body: JSON.stringify({ 
      content,
      id,
   })
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error('Unable to send message.')
  });
}

function getChat(id) {
  return fetch(BASE_URL + `getchat/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken(),
    },
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error('Unable to retrieve messages');
  });
}

function scrambleAllOrNewMessages(messages, scrambledMessages, key, randChars) {
  messages.forEach((message, idx) => {
    if (!scrambledMessages[idx]) {
      let newScrambledMessage = message.content
      .split('')
      .map((char, charIdx) => {
        if (charIdx % key === 0) {
          return randChars[Math.floor(Math.random() * randChars.length)];
        } else {
          return char;
        }
      })
      .join('');
      scrambledMessages.push(newScrambledMessage);
    }
  });
  return scrambledMessages;
}

export default {
  create,
  submitMessage,
  getChat,
  scrambleAllOrNewMessages,
};