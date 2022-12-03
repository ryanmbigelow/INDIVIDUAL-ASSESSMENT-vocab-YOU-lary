import addWordForm from '../components/Forms/addWordForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR ADD WORD BUTTON
    if (e.target.id.includes('add-vocab-word-btn')) {
      addWordForm();
    }
  });
};

export default domEvents;
