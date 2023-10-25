const axios = require('axios');
require('dotenv').config();

const TOKEN = process.env.TOKEN;
const PAGE_ID = process.env.PAGE_ID;

const sendMessage = async (senderId, message) => {
  let options = {
    method: 'POST',
    url: `https://graph.facebook.com/v17.0/${PAGE_ID}/messages`,
    params: {
      access_token: TOKEN
    },
    headers: { 'Content-Type': 'application/json' },
    data: {
      recipient: { id: senderId },
      messaging_type: 'RESPONSE',
      message: { text: message }
    }
  };
  let response = await axios.request(options);
  if (response['status'] == 200 && response['statusText'] === 'OK') {
    return 1;
  } else {
    return 0;
  }
};

const setTypingOn = async (senderId) => {
  let options = {
    method: 'POST',
    url: `https://graph.facebook.com/v17.0/${PAGE_ID}/messages`,
    params: {
      access_token: TOKEN
    },
    headers: { 'Content-Type': 'application/json' },
    data: {
      recipient: { id: senderId },
      sender_action: 'typing_on'
    }
  };
  let response = await axios.request(options);
  if (response['status'] == 200 && response['statusText'] === 'OK') {
    return 1;
  } else {
    return 0;
  }
};

const setTypingOff = async (senderId) => {
  let options = {
    method: 'POST',
    url: `https://graph.facebook.com/v17.0/${PAGE_ID}/messages`,
    params: {
      access_token: TOKEN
    },
    headers: { 'Content-Type': 'application/json' },
    data: {
      recipient: { id: senderId },
      sender_action: 'typing_off'
    }
  };
  let response = await axios.request(options);
  if (response['status'] == 200 && response['statusText'] === 'OK') {
    return 1;
  } else {
    return 0;
  }
};

module.exports = {
  sendMessage,
  setTypingOn,
  setTypingOff
}
