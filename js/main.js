// Initialize Firebase
var config = {
    apiKey: "AIzaSyCTsPT59AXY3GsXsKgypmN9cVq8ZIITEzM",
    authDomain: "tecmult-oficial.firebaseapp.com",
    databaseURL: "https://tecmult-oficial.firebaseio.com",
    projectId: "tecmult-oficial",
    storageBucket: "tecmult-oficial.appspot.com",
    messagingSenderId: "378189987670"
  };
  firebase.initializeApp(config);

  var emailRef = firebase.database().ref('emails');



//Colocando um escutador para saber quando houve o click no botão
document.getElementById('emailforms').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var email = document.getElementById('useremail').value;

    saveEmail(email)
}

function saveEmail(email){
    var nweemailRef = emailRef.push();

    nweemailRef.set({
        email: email
    });
}

