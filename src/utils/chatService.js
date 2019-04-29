import tokenService from '../utils/tokenService'

const BASE_URL = '/api/chats/';


function create() {
  return fetch(BASE_URL + 'new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken(),
    },
  })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('There was an error creating chat');
    });
}


function getChat(id) {
  return fetch(BASE_URL + `${id}`, {
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
  let offLeft, offRight
  const leftRange = [];
  const rightRange = [];
  const DIVISOR = 1.25;
  for (let i = 0; i <= chalRat; i++) {
    leftRange.push(Math.abs(descrambSetL + i - descrambKeyL))
    leftRange.push(Math.abs(descrambSetL - i - descrambKeyL))
    rightRange.push(Math.abs(descrambSetR + i - descrambKeyR))
    rightRange.push(Math.abs(descrambSetR - i - descrambKeyR))
  }
  offLeft = Math.min(...leftRange);
  offRight = Math.min(...rightRange)
  return (
    (10 - offLeft - offRight) / DIVISOR >= 1
      ? Math.floor((10 - offLeft - offRight) / DIVISOR)
      : 1
  );
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

function generateDescrambleKey(descrambleSetting) {
  let descrambleKey;
  do {
    descrambleKey = Math.floor(Math.random() * 10)
  }
  while (descrambleKey === descrambleSetting)
  return descrambleKey;
}

function addUserToDescrambledFor(chatId) {
  return fetch(BASE_URL + 'addtodescrambled', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken(),
    },
    body: JSON.stringify({ chatId }),
  })
    .then(res => {
      if (res.ok) return;
      throw new Error('There was an error adding the user');
    });
}

function getAllChats() {
  return fetch(BASE_URL + 'getallchats', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken(),
    },
  })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Unable to retrieve chats');
    });
}

export default {
  create,
  getChat,
  scrambleAllOrNewMessages,
  getScrambleKey,
  reScrambleAllMessages,
  generateDescrambleKey,
  addUserToDescrambledFor,
  getAllChats,
};