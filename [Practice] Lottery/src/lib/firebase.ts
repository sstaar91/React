import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FB_API_KEY,
  authDomain: import.meta.env.VITE_APP_FB_AUTH,
  projectId: import.meta.env.VITE_APP_FB_ID,
  storageBucket: import.meta.env.VITE_APP_FB_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FB_MSG_ID,
  appId: import.meta.env.VITE_APP_FB_APP_ID,
  measurementId: import.meta.env.VITE_APP_FB_MEASURE_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
