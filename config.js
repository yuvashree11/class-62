import firebase from 'firebase'

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyAv11Fx0zRHNGLBGhTa0pNDkVplzdPwMVs",
  authDomain: "pro-60-33cc6.firebaseapp.com",
  projectId: "pro-60-33cc6",
  storageBucket: "pro-60-33cc6.appspot.com",
  messagingSenderId: "550343769860",
  appId: "1:550343769860:web:3571e0f15196cb0d255a51"
};

firebase.initializeApp(firebaseConfig)
  export default firebase.database()
 

  