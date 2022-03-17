import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "fir-react-redux-crud-d24c0.firebaseapp.com",
  projectId: "fir-react-redux-crud-d24c0",
  storageBucket: "fir-react-redux-crud-d24c0.appspot.com",
  messagingSenderId: "660094832377",
  appId: "1:660094832377:web:ab752cd183d1000c069c28",
});

export const auth = app.auth();
export default app;
