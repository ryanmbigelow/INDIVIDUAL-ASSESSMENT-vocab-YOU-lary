import { getWords, createWord, updateWord } from '../api/vocabWordsData';
import { showVocabWords } from '../pages/vocabWords';

const formEvents = () => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-word')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language_id: document.querySelector('#language_id').value,
        language: document.querySelector('#language_id').value,
        userId: '',
        dateSubmitted: '',
      };
      createWord(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateWord(patchPayload).then(() => {
          getWords().then(showVocabWords);
        });
      });
    }

    // TODO: CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-word-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language_id: document.querySelector('#language_id').value,
        language: document.querySelector('#language_id').value,
        userId: 'userId',
        dateSubmitted: 'dateSubmitted',
        firebaseKey,
      };
      updateWord(payload).then(() => {
        getWords().then(showVocabWords);
      });
    }
  });
};

export default formEvents;
