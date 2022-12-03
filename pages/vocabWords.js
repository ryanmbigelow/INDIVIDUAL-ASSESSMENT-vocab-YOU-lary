import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyWords = () => {
  const domString = '<h1>No Words</h1>';
  renderToDOM('#wordsOnDom', domString);
};

const showVocabWords = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-word-btn">Add A Vocab Word</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.definition}</h6>
        <p class="card-text bold">${item.language}</p>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-word-btn--${item.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="update-word--${item.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-word-btn--${item.firebaseKey}"></i>
      </div>
    </div>
    `;
  });
  renderToDOM('#wordsOnDom', domString);
};

export { showVocabWords, emptyWords };
