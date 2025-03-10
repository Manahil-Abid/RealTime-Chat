  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getDatabase, ref, push, onChildAdded } from"https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAto4qTD_QpyXBwf77_DrBWf1mFOS74chA",
    authDomain: "database-c48e9.firebaseapp.com",
    databaseURL: "https://database-c48e9-default-rtdb.firebaseio.com",
    projectId: "database-c48e9",
    storageBucket: "database-c48e9.firebasestorage.app",
    messagingSenderId: "1043413243960",
    appId: "1:1043413243960:web:320c072313cafac581eecd",
    measurementId: "G-0EZ60KBPBB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app);

  window.sendMessage = function () {
    let username = document.getElementById('username').value;
    let message = document.getElementById('message').value;

    if (username === "" || message === "") return;  // agr usne isme se kuch nhi likha tu usko woh return agr kuch nh likha tu empty return krdo 

    push(ref(db ,"messages") , {
        name : username,
        text : message 
    });

  document.getElementById("message").value = ""; // Clear input // agr or kuch likhna ha tu name apka likha rhy ga bus message baar baar type krna prey ga
};

onChildAdded(ref(db , 'messages') , function(snapshot){
    let data = snapshot.val();//ik firebase function ha jo hamare firebase code ko visible krta ha firebase se data convert krwaya ha readable form me
    let messageBox = document.getElementById("messages");
    let msgElement =  document.createElement("p");
    msgElement.textContent = data.name + ": " + data.text;
    messageBox.appendChild(msgElement); // msgbox me para add krdo appendChild k zariye 
    messageBox.scrollTop = messageBox.scrollHeight; // jb bh msg aye yeh scroll down krein
  });

  
