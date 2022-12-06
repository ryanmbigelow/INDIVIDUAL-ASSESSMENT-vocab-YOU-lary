import addWordForm from '../components/Forms/addWordForm';
import { deleteWord, getSingleWord, getWords } from '../api/vocabWordsData';
import viewWord from '../pages/viewSingleWord';
import { showVocabWords } from '../pages/vocabWords';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR ADD WORD BUTTON
    if (e.target.id.includes('add-vocab-word-btn')) {
      addWordForm(user.uid);
    }
    // CLICK EVENT FOR VIEW SINGLE WORD
    if (e.target.id.includes('view-word-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleWord(firebaseKey).then((word) => viewWord(word));
    }
    // CLICK EVENT FOR UPDATE WORD
    if (e.target.id.includes('update-word-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleWord(firebaseKey).then((word) => addWordForm(user.uid, word));
    }
    // CLICK EVENT FOR DELETE WORD
    if (e.target.id.includes('delete-word-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteWord(firebaseKey).then(() => {
        getWords(user.uid).then(showVocabWords);
      });
    }
  });
};

export default domEvents;
