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
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function add_room()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";}
