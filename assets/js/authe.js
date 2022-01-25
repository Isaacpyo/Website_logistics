// Initialize Firebase (ADD YOUR OWN DATA)
function initializeApp() {

    const firebaseConfig = {
        apiKey: "AIzaSyCrqt18ANcTf9z9lX9Z0XuwkI_oRYRQmfM",
        authDomain: "mugaal.firebaseapp.com",
        projectId: "mugaal",
        storageBucket: "mugaal.appspot.com",
        messagingSenderId: "736784721158",
        appId: "1:736784721158:web:1b20a8c2b57c8dea51aa87",
        measurementId: "G-B2EMSHK0LT"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    // Reference messages collection
    var messagesRef = firebase.database().ref('messages');

    // Listen for form submit
    document.getElementById('contactForm').addEventListener('submit', submitForm);

    // Submit form
    function submitForm(e) {
        e.preventDefault();

        // Get values
        var name = getInputVal('name');
        var number = getInputVal('number');
        var email = getInputVal('email');
        var selects = getInputVal('selects');
        var location = getInputVal('location');
        var destination = getInputVal('destination');
        var message = getInputVal('message');

        // Save message
        saveMessage(name, number, email, selects, location, destination, message);

        // Show alert
        document.querySelector('.alert').style.display = 'block';

        // Hide alert after 3 seconds
        setTimeout(function() {
            document.querySelector('.alert').style.display = 'none';
        }, 4000);

        // Clear form
        document.getElementById('contactForm').reset();
    }

    // Function to get get form values
    function getInputVal(id) {
        return document.getElementById(id).value;
    }

    // Save message to firebase
    function saveMessage(name, number, email, selects, location, destination, message) {
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            name: name,
            number: number,
            email: email,
            selects: selects,
            location: location,
            destination: destination,
            message: message
        });
    }
}