var firebaseConfig = {
    apiKey: "AIzaSyBKZ8fNF8gOHEKIRKSL-rL0Y_pD2bn3Nq8",
    authDomain: "greninjavsinfernape.firebaseapp.com",
    databaseURL: "https://greninjavsinfernape-default-rtdb.firebaseio.com",
    projectId: "greninjavsinfernape",
    storageBucket: "greninjavsinfernape.appspot.com",
    messagingSenderId: "950153279773",
    appId: "1:950153279773:web:8d2005fef85cc68c6209f4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name +"!"; 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
        console.log("Room names are :"+Room_names);
        row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;

    //End code
    });});}
getData();

function logout(){

 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location="index.html";

}

function addroom(){

room_name= document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location= "kwitter_page.html";
}