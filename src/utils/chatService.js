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
        if (charIdx % key === 0 && key !== 10) {
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

function getScrambleKey(chalRat, descrambSetL, descrambSetR, descrambKeyL, descrambKeyR) {
  if (descrambSetL === descrambKeyL && descrambSetR === descrambKeyR) return 10;
  let offLeft, offRight, leftRange = [], rightRange = [];
  switch (chalRat) {
    case 0:
      offLeft = Math.abs(descrambSetL - descrambKeyL);
      offRight = Math.abs(descrambSetR - descrambKeyR);
      break;
    case 1:
      leftRange.push(Math.abs(descrambSetL + 1 - descrambKeyL))
      leftRange.push(Math.abs(descrambSetL - descrambKeyL))
      leftRange.push(Math.abs(descrambSetL - 1 - descrambKeyL))
      rightRange.push(Math.abs(descrambSetR + 1 - descrambKeyR))
      rightRange.push(Math.abs(descrambSetR - descrambKeyR))
      rightRange.push(Math.abs(descrambSetR - 1 - descrambKeyR))
      offLeft = Math.min(...leftRange);
      offRight = Math.min(...rightRange);
      break;
    case 2:
      leftRange.push(Math.abs(descrambSetL + 2 - descrambKeyL))
      leftRange.push(Math.abs(descrambSetL + 1 - descrambKeyL))
      leftRange.push(Math.abs(descrambSetL - descrambKeyL))
      leftRange.push(Math.abs(descrambSetL - 1 - descrambKeyL))
      leftRange.push(Math.abs(descrambSetL - 2 - descrambKeyL))
      rightRange.push(Math.abs(descrambSetR + 2 - descrambKeyR))
      rightRange.push(Math.abs(descrambSetR + 1 - descrambKeyR))
      rightRange.push(Math.abs(descrambSetR - descrambKeyR))
      rightRange.push(Math.abs(descrambSetR - 1 - descrambKeyR))
      rightRange.push(Math.abs(descrambSetR - 2 - descrambKeyR))
      offLeft = Math.min(...leftRange);
      offRight = Math.min(...rightRange);
      break;
    default:
      break;
  }
  const num = (Math.floor((10 - offLeft - offRight > 0 ? 10 - offLeft - offRight : 0)/1.1));
  if (num) return num;
  return 1;
}

function reScrambleAllMessages(messages, key, randChars) {
  let scrambledMessages = [];
  messages.forEach((message) => {
      let newScrambledMessage = message.content
      .split('')
      .map((char, charIdx) => {
        if (charIdx % key === 0 && key !== 10) {
          return randChars[Math.floor(Math.random() * randChars.length)];
        } else {
          return char;
        }
      })
      .join('');
      scrambledMessages.push(newScrambledMessage);
  });
  return scrambledMessages;
}

export default {
  create,
  submitMessage,
  getChat,
  scrambleAllOrNewMessages,
  getScrambleKey,
  reScrambleAllMessages,
};