import firebase, {firestore} from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBx6riIz_1GnRsehUVXI_POETSuD4XemvY",
  authDomain: "barbacker-cocktail-db.firebaseapp.com",
  databaseURL: "https://barbacker-cocktail-db.firebaseio.com",
  projectId: "barbacker-cocktail-db",
  storageBucket: "barbacker-cocktail-db.appspot.com",
  messagingSenderId: "165695578547",
  appId: "1:165695578547:web:7e4675145155a7114debc6"
}

const app = firebase.initializeApp(firebaseConfig)
const auth = app.auth()
const db = firestore()

export {auth, db, app}
