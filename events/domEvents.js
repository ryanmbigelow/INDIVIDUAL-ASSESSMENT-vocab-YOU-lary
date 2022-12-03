import addWordForm from '../components/Forms/addWordForm';
import { getSingleWord, updateWord } from '../api/vocabWordsApi';
import viewWord from '../pages/viewSingleWord';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR ADD WORD BUTTON
    if (e.target.id.includes('add-vocab-word-btn')) {
      addWordForm();
    }
    // CLICK EVENT FOR VIEW SINGLE WORD
    if (e.target.id.includes('view-word-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleWord(firebaseKey).then((word) => viewWord(word));
    }
    // CLICK EVENT FOR UPDATE WORD
    if (e.target.id.includes('update-word-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      updateWord(firebaseKey).then((word) => addWordForm(word));
    }
  });
};

export default domEvents;
