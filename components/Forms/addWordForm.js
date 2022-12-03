import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectLanguage from './selectLanguage';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addWordForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-word-btn--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
      <div class="form-group">
        <label for="title">Vocab Word</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabWord" placeholder="Enter Vocab Word" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Definition</label>
        <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group" id="select-language">
      </div>
      <button type="submit" class="btn btn-primary">Submit Word
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectLanguage(`${obj.language_id || ''}`);
};

export default addWordForm;
