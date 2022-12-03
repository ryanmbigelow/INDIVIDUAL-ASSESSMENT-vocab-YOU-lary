import { getSingleLanguage, getWordsByLanguage } from './languagesData';

const getLanguageByFirebaseKey = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleLanguage(firebaseKey).then((languageObject) => {
    getWordsByLanguage(languageObject.firebaseKey).then((wordObject) => resolve({ ...languageObject, wordObject }));
  }).catch(reject);
});

export default getLanguageByFirebaseKey;
