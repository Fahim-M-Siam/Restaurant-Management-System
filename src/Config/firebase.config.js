import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2liD0N55Bymy2GjM0AQjZ-aR8Tr3yuB4",
  authDomain: "tasteharmony-cafe-client.firebaseapp.com",
  projectId: "tasteharmony-cafe-client",
  storageBucket: "tasteharmony-cafe-client.appspot.com",
  messagingSenderId: "44115773973",
  appId: "1:44115773973:web:368d114f78aaceb5a5dc1c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
