//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAiwquO3XW8NdEsgkLI7JSP6NFD3y23Fk4",
      authDomain: "lets-chat-web-app-dd7b6.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-dd7b6-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-dd7b6",
      storageBucket: "lets-chat-web-app-dd7b6.appspot.com",
      messagingSenderId: "893317882837",
      appId: "1:893317882837:web:33a94c2d1e1598ed3a135c",
      measurementId: "G-SNC2SNKZF1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);  

    username = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + username + "!";  

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
          });

          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html"
    }
function getData() 
{
firebase.database().ref("/").on('value',
 function(snapshot)
  {
document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{
childKey  = childSnapshot.key;

       Room_names = childKey;
      //Start code
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"<div><hr>";
          document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}