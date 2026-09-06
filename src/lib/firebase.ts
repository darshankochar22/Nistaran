import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/**
 * These are Firebase Web SDK config values, not secrets — Firebase's own docs
 * say they're safe to ship to the client; real access control lives in
 * Firestore security rules. The fallbacks below keep the existing
 * nistaran-career-atlas project working out of the box; override via env vars
 * if the project is ever rotated.
 */
const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY ??
    "AIzaSyD-raWQ_kF2M9Dr0H4E_fTRPocG7bTzcHw",
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ??
    "nistaran-career-atlas.firebaseapp.com",
  projectId:
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "nistaran-career-atlas",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ??
    "nistaran-career-atlas.firebasestorage.app",
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "805093117604",
  appId:
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID ??
    "1:805093117604:web:6115ed4074194ce9efe031",
};

export const firebaseApp = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
