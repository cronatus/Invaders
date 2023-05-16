/**
 * Created by B00265222/MWilliams on 06/06/2017.
 */

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCE6hoRDReRe9JXSgrYfn-bRtHNNKsroYo",
    authDomain: "uwsstud-apmd.firebaseapp.com",
    databaseURL: "https://uwsstud-apmd.firebaseio.com",
    projectId: "uwsstud-apmd",
    storageBucket: "uwsstud-apmd.appspot.com",
    messagingSenderId: "928823671436"
};
firebase.initializeApp(config);

//const preObject = document.getElementById('highScore');

log = function(){
    console.log(dbRefObject)
};

const dbRefObject = firebase.database();
console.log(firebase);

