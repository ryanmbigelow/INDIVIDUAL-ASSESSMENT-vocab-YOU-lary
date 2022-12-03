import { getWords, createWord, updateWord } from '../api/vocabWordsApi';
import { showVocabWords } from '../pages/vocabWords';

const formEvents = () => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-word')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('definition').value,
        language_id: document.querySelector('#language_id'),
      };
      createWord(payload).then(({ word }) => {
        const patchPayload = { firebaseKey: word };
        updateWord(patchPayload).then(() => {
          getWords().then(showVocabWords);
        });
      });
    }

    // TODO: CLICK EVENT FOR EDITING A BOOK
    // if (e.target.id.includes('update-book')) {
    //   const [, firebaseKey] = e.target.id.split('--');
    //   const payload = {
    //     title: document.querySelector('#title').value,
    //     description: document.querySelector('#description').value,
    //     image: document.querySelector('#image').value,
    //     price: document.querySelector('#price').value,
    //     author_id: document.querySelector('#author_id').value,
    //     sale: document.querySelector('#sale').checked,
    //     firebaseKey,
    //   };
    //   updateBook(payload).then(() => {
    //     getBooks(user.uid).then(showBooks);
    //   });
    // }
  });
};

export default formEvents;
