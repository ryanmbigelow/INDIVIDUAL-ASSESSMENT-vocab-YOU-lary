import { getWords } from '../api/vocabWordsData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/Shared/domBuilder';
import navBar from '../components/Shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { showVocabWords } from '../pages/vocabWords';

const startApp = () => {
  domBuilder();
  domEvents();
  formEvents();
  navBar();
  logoutButton();
  navigationEvents();
  getWords().then((words) => showVocabWords(words));
};

export default startApp;
