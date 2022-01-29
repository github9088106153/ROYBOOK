var firebaseConfig = {
      apiKey: "AIzaSyA2xDX4t5YVY9vyldJCf2zZNw5oMG7LVbI",
      authDomain: "kwitter-40b1a.firebaseapp.com",
      databaseURL: "https://kwitter-40b1a-default-rtdb.firebaseio.com",
      projectId: "kwitter-40b1a",
      storageBucket: "kwitter-40b1a.appspot.com",
      messagingSenderId: "371510162190",
      appId: "1:371510162190:web:5c014412d2cda6bb37dd5f",
      measurementId: "G-3WCBQ9WV6V"
    };
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send()
{
   msg= document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0
   });
   document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "kwitter_room.html";}