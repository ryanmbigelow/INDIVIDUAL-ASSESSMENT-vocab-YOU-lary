import { filterJsWords, filterCssWords, filterHtmlWords } from '../api/languagesData';
import { getWords } from '../api/vocabWordsData';
import { showVocabWords } from '../pages/vocabWords';

const navigationEvents = (user) => {
  // SHOW ALL VOCAB WORDS
  document.querySelector('#show-all-cards-btn').addEventListener('click', () => {
    getWords(user.uid).then((words) => showVocabWords(words));
  });
  // GET JS WORDS
  document.querySelector('#js-vocab-words').addEventListener('click', () => {
    filterJsWords(user.uid).then((words) => showVocabWords(words));
  });
  // GET CSS WORDS
  document.querySelector('#css-vocab-words').addEventListener('click', () => {
    filterCssWords(user.uid).then((words) => showVocabWords(words));
  });
  // GET CSS WORDS
  document.querySelector('#html-vocab-words').addEventListener('click', () => {
    filterHtmlWords(user.uid).then((words) => showVocabWords(words));
  });
};

export default navigationEvents;
