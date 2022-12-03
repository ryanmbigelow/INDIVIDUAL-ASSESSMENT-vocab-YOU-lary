import client from '../utils/client';

const endpoint = client.databaseURL;

// GET WORDS
const getWords = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// CREATE A WORD
const createWord = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// UPDATE A WORD
const updateWord = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export { getWords, createWord, updateWord };
