import client from '../utils/client';

const endpoint = client.databaseURL;

// GET LANGUAGE
const getLanguages = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// GET SINGLE LANGUAGE
const getSingleLanguage = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// CREATE A LANGUAGE
const createLanguage = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages.json`, {
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

// UPDATE A LANGUAGE
const updateLanguage = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages/${payload.firebaseKey}.json`, {
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

// GET WORDS BY LANGUAGE
const getWordsByLanguage = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords.json?orderBy="language_id"&equalTo=${firebaseKey}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// FILTER JS WORDS
const filterJsWords = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'applications.json',
    }
  })
    .then((response) => response.json())
    .then((data) => {
      const filterWords = Object.values(data).filter((item) => item.language === 'JavaScript');
      resolve(filterWords);
    })
    .catch(reject);
});

// FILTER CSS WORDS
const filterCssWords = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'applications.json',
    }
  })
    .then((response) => response.json())
    .then((data) => {
      const filterWords = Object.values(data).filter((item) => item.language === 'CSS');
      resolve(filterWords);
    })
    .catch(reject);
});

// FILTER CSS WORDS
const filterHtmlWords = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'applications.json',
    }
  })
    .then((response) => response.json())
    .then((data) => {
      const filterWords = Object.values(data).filter((item) => item.language === 'HTML');
      resolve(filterWords);
    })
    .catch(reject);
});

export {
  getLanguages, getSingleLanguage, createLanguage, updateLanguage, getWordsByLanguage, filterJsWords, filterCssWords, filterHtmlWords
};
