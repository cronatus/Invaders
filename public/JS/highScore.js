/**
 * Created by B00265222/MWilliams on 01/06/2017.
 */

function writeUserScore( tscore, name){

    name = $("#addscore").val();        //set this variable to the addscore object on tje submitScore html page
    tscore = localStorage.getItem("score"); //get the players score from local storage

    var scoredata = {
        RScore: -tscore,        //A control variable to make the high scores print from highest to lowest there is no simpler way to do this with Firebases toolset (normally prints out lowest to highest)
        Score: tscore,          //The players score from playing through the game
        Name: name              //The Name input by the player
    };

    var newPostKey = firebase.database().ref().child('highScore').push().key; // create a new post in the database

    var updates = {};
    updates['/highScore/' + newPostKey] = scoredata;    //add the score data to the newly created key

    return firebase.database().ref().update(updates);   //return the new information

    console.log(firebase.database().ref().update(updates)); //print the information to the console
}

function getDBData(){

    var db = firebase.database();       //get a reference to the database
    var ref = db.ref('/highScore/');    //access the highscore array within the database
    ref.orderByChild('RScore').on('child_added', function (snapshot) {              //reorder the variables according to the control variable created above and run this function
        //console.log(snapshot.val().Name + " got " + snapshot.val().Score + " points");      //print the list into the console (was used for testing)
        $("<li>").html(snapshot.val().Name + " - " + snapshot.val().Score).appendTo("#subjectlist");      //create a list item to add to the high scorelist

    })

}