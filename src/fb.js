import * as firebase from "firebase"

const firebaseConfig = {apiKey: "AIzaSyB2SmWg4DcLgVNVvJV49scsheDj_OP6mzo",
    authDomain: "hahn-jehee.firebaseapp.com",
    databaseURL: "https://hahn-jehee.firebaseio.com",
    projectId: "hahn-jehee",
    storageBucket: "hahn-jehee.appspot.com",
    messagingSenderId: "128399043191",
    appId: "1:128399043191:web:de9ef70d410fce7d32b472",
    measurementId: "G-DHDZRD1NBB"}

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()

export default auth
