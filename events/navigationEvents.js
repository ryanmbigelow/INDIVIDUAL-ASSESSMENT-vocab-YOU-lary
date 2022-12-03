import { getWords } from '../api/vocabWordsApi';
import { showVocabWords } from '../pages/vocabWords';

const navigationEvents = () => {
  // SHOW ALL VOCAB WORDS
  document.querySelector('#show-all-cards-btn').addEventListener('click', () => {
    getWords().then((words) => showVocabWords(words));
  });
  // GET WORDS BY LANGUAGE
};

export default navigationEvents;
