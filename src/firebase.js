import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCY11WQLvwNTQtChk7n_M8YJV2qhGpQ4b4",
    authDomain: "netflix-yt-a1372.firebaseapp.com",
    projectId: "netflix-yt-a1372",
    storageBucket: "netflix-yt-a1372.appspot.com",
    messagingSenderId: "930519546008",
    appId: "1:930519546008:web:bff86db74d2d2916ae38ed"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db