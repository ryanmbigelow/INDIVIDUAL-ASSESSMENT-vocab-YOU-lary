import { getLanguages } from '../../api/languagesData';
import renderToDOM from '../../utils/renderToDom';

const selectLanguage = (languageId) => {
  let domString = `<label for="language">Select a Language</label>
    <select class="form-control" id="language_id" required>
    <option value="">Select a Language</option>`;

  getLanguages().then((languagesArray) => {
    languagesArray.forEach((languageObj) => {
      domString += `
          <option 
            value="${languageObj.firebaseKey}" 
            ${languageId === languageObj.firebaseKey ? 'selected' : ''}>
              ${languageObj.language}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-language', domString);
  });
};

export default selectLanguage;
