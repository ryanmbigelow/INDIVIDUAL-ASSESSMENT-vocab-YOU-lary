import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewWord = (obj) => {
  clearDom();

  const domString = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${obj.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${obj.definition}</h6>
        <p class="card-text bold">${obj.language}</p>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-word-btn--${obj.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="update-word--${obj.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-word-btn--${obj.firebaseKey}"></i>
      </div>
    </div>
    `;
  renderToDOM('#view', domString);
};

export default viewWord;
