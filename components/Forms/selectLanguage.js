import { getLanguages } from '../../api/languagesData';
import renderToDOM from '../../utils/renderToDom';

const selectLanguage = (user, languageId) => {
  let domString = `<label for="language">Select a Language</label>
    <select class="form-control" id="language_id" required>
    <option value="">Select a Language</option>`;

  getLanguages(user).then((languagesArray) => {
    languagesArray.forEach((languageObj) => {
      domString += `
          <option
            value="${languageObj.title}"
            ${languageId === languageObj.title ? 'selected' : ''}>
              ${languageObj.title}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-language', domString);
  });
};

export default selectLanguage;
