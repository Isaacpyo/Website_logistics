import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyCrqt18ANcTf9z9lX9Z0XuwkI_oRYRQmfM",
    authDomain: "mugaal.firebaseapp.com",
    databaseURL: "https://mugaal-default-rtdb.firebaseio.com",
    projectId: "mugaal",
    storageBucket: "mugaal.appspot.com",
    messagingSenderId: "736784721158",
    appId: "1:736784721158:web:1b20a8c2b57c8dea51aa87",
    measurementId: "G-B2EMSHK0LT"
};
const app = initializeApp(firebaseConfig);
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-database.js";
const database = getDatabase(app);
var messagesRef = ref(database, "contactFormDB");

document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e) {
    e.preventDefault();
    var name = getElementVal('name');
    var number = getElementVal('number');
    var email = getElementVal('email');
    var service = getElementVal('service');
    var location = getElementVal('location');
    var destination = getElementVal('destination');
    var message = getElementVal('message');

    saveMessage(name, number, email, service, location, destination, message);


    document.querySelector(".alert").style.display = "block";
    setTimeout(() => { document.querySelector(".alert").style.display = "none"; }, 5000);
    document.getElementById("contactForm").reset();
}

function
saveMessage(name, number, email, service, location, destination, message) {
    var newMessageRef = push(messagesRef);
    set(newMessageRef, {
        name: name,
        number: number,
        email: email,
        service: service,
        location: location,
        destination: destination,
        message: message,
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};