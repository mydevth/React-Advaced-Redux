import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDI4Nwq0pnezJhojCQSJ5rhSqoH4L1Bs-k",
  authDomain: "redux-maintainance-app.firebaseapp.com",
  projectId: "redux-maintainance-app",
  storageBucket: "redux-maintainance-app.appspot.com",
  messagingSenderId: "996941082405",
  appId: "1:996941082405:web:62002e51f2f0a57fcdf4cc",
  measurementId: "G-7MJBQGGQT9",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
