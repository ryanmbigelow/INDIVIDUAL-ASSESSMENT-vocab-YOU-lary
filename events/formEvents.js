import { getWords, createWord, updateWord } from '../api/vocabWordsData';
import { showVocabWords } from '../pages/vocabWords';

// GET CURRENT DATE
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const currentDate = `${month}-${day}-${year}`;

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A WORD
    if (e.target.id.includes('submit-word')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language_id').value,
        dateSubmitted: currentDate,
        uid: user.uid,
      };
      createWord(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateWord(patchPayload).then(() => {
          getWords(user.uid).then(showVocabWords);
        });
      });
    }

    // TODO: CLICK EVENT FOR EDITING A WORD
    if (e.target.id.includes('update-word-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language_id').value,
        uid: 'uid',
        dateSubmitted: currentDate,
        firebaseKey,
      };
      updateWord(payload).then(() => {
        getWords(user.uid).then(showVocabWords);
      });
    }
  });
};

export default formEvents;
