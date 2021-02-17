//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDtWnjl8ePKVArSLXzZ3Yw589c_cXverUQ",
    authDomain: "kwitterr-2f43e.firebaseapp.com",
    databaseURL: "https://kwitterr-2f43e-default-rtdb.firebaseio.com",
    projectId: "kwitterr-2f43e",
    storageBucket: "kwitterr-2f43e.appspot.com",
    messagingSenderId: "461181974766",
    appId: "1:461181974766:web:0485e77d5841dd256d5bff",
    measurementId: "G-YLGFCLQJVK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

function addUser()
{
    user_name = document.getElementById("user_name").value;
    password = document.getElementById("password").value;
    localStorage.setItem("user_name", user_name);
    localStorage.setItem("password", password);
    window.location = "Kwitter_room.html";
}