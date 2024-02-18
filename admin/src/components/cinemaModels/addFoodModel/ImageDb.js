import React from 'react'
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

    const firebaseConfig = {
        apiKey: "AIzaSyChLxQoKBG2V1jrzZIfa4PhnSZMqiTOX_I",
        authDomain: "moviemaster-a4f42.firebaseapp.com",
        projectId: "moviemaster-a4f42",
        storageBucket: "moviemaster-a4f42.appspot.com",
        messagingSenderId: "304270015557",
        appId: "1:304270015557:web:a5307e9352755d77f7f72c",
        measurementId: "G-C18CHLKKZ8"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);


export const imageDb=getStorage(app) 
