import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyASpAJz0sDYER_BgsJrvfeOnrrzos_b4Uo",
  authDomain: "vk-clone-349f7.firebaseapp.com",
  projectId: "vk-clone-349f7",
  storageBucket: "vk-clone-349f7.appspot.com",
  messagingSenderId: "834873868644",
  appId: "1:834873868644:web:c74f3404aa30920bf67a71",
};

export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);