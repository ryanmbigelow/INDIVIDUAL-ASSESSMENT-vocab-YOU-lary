import { getLanguages } from '../../api/languagesData';
// import getLanguageByFirebaseKey from '../../api/mergedData';
// import { getWords } from '../../api/vocabWordsData';
import renderToDOM from '../../utils/renderToDom';

const selectLanguage = (languageId) => {
  let domString = `<label for="language">Select a Language</label>
    <select class="form-control" id="language_id" required>
    <option value="">Select a Language</option>`;

  // getWords().then((wordsArray) => {
  //   wordsArray.array.forEach((wordObj) => {
  //     getLanguageByFirebaseKey(wordObj.language_id);
  //   });
  // });
  // domString += '</select>';

  // renderToDOM('#select-language', domString);
  // };
  getLanguages().then((languagesArray) => {
    languagesArray.forEach((languageObj) => {
      domString += `
          <option
            value="${languageObj.title}"
            ${languageId === languageObj.firebaseKey ? 'selected' : ''}>
              ${languageObj.title}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-language', domString);
  });
};

export default selectLanguage;
