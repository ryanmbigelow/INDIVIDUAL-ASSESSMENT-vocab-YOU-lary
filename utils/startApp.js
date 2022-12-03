import { getWords } from '../api/vocabWordsApi';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/Shared/domBuilder';
import navBar from '../components/Shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import { showVocabWords, emptyWords } from '../pages/vocabWords';

const startApp = () => {
  domBuilder();
  domEvents();
  formEvents();
  navBar();
  logoutButton();
  emptyWords();
  getWords().then((words) => showVocabWords(words));
};

export default startApp;
