    
    
//     // Import the functions you need from the SDKs you need
//     import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
//     import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
    
//     import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js';
//     // TODO: Add SDKs for Firebase products that you want to use
//     // https://firebase.google.com/docs/web/setup#available-libraries
  


//     // Your web app's Firebase configuration
//     // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//     const firebaseConfig = {
//     apiKey: "AIzaSyAbXggEvAOxILfIcsDqSxg2YCLzvjKPKaI",
//     authDomain: "urnaeletronica-87283.firebaseapp.com",
//     projectId: "urnaeletronica-87283",
//     storageBucket: "urnaeletronica-87283.appspot.com",
//     messagingSenderId: "819076012701",
//     appId: "1:819076012701:web:87a4eaee72b83784c29274",
//     measurementId: "G-ZEKTGFRMLP"
//   };


//     // Initialize Firebase
//     const app = initializeApp(firebaseConfig);
//     const db = getFirestore(app);

// // Get a list of cities from your database
//     async function getCandidatos(db) {
//         const citiesCol = collection(db, 'candidatos');
//         const citySnapshot = await getDocs(citiesCol);
//         const cityList = citySnapshot.docs.map(doc => doc.data());
//         console.log(cityList)
//         return cityList;
//     }

//    getCandidatos(db)