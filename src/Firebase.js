import { initializeApp } from "firebase/app";
const App = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL:process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT,
  storageBucket:process.env.REACT_APP_BUCKET,
  messagingSenderId:process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_ID
});
export default App;