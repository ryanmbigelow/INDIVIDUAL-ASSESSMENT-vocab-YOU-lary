import { filterJsWords, filterCssWords, filterHtmlWords } from '../api/languagesData';
import { getWords } from '../api/vocabWordsData';
import { showVocabWords } from '../pages/vocabWords';

const navigationEvents = () => {
  // SHOW ALL VOCAB WORDS
  document.querySelector('#show-all-cards-btn').addEventListener('click', () => {
    getWords().then((words) => showVocabWords(words));
  });
  // GET JS WORDS
  document.querySelector('#js-vocab-words').addEventListener('click', () => {
    filterJsWords().then((words) => showVocabWords(words));
  });
  // GET CSS WORDS
  document.querySelector('#css-vocab-words').addEventListener('click', () => {
    filterCssWords().then((words) => showVocabWords(words));
  });
  // GET CSS WORDS
  document.querySelector('#html-vocab-words').addEventListener('click', () => {
    filterHtmlWords().then((words) => showVocabWords(words));
  });
};

export default navigationEvents;
