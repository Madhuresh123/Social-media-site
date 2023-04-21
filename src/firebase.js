import firebase from 'firebase/compat/app';



const firebaseConfig = {
    apiKey: "AIzaSyCEF-EnHwvLcz-wWDDkMoBDyzeJ-Rmya8s",
    authDomain: "linkend-clone.firebaseapp.com",
    projectId: "linkend-clone",
    storageBucket: "linkend-clone.appspot.com",
    messagingSenderId: "417404099112",
    appId: "1:417404099112:web:82308965d748d37e19331d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();


  export {db, auth};