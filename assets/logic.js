var config = {
  apiKey: "AIzaSyA5eYKsB8T2q6rMGdKSvac6eQsWTzsZEjE",
  authDomain: "fir-recent-user.firebaseapp.com",
  databaseURL: "https://fir-recent-user.firebaseio.com",
  storageBucket: "fir-recent-user.appspot.com"
};

firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Initial Values
var name = "";
var email = "";
var comment = "";

// Capture Button Click
$("#add-user").on("click", function(event) {
  // Don't refresh the page!
  event.preventDefault();

  // YOUR TASK!!!
  // Code in the logic for storing and retrieving the most recent user.
  // Don't forget to provide initial data to your Firebase database.
  name = $("#name-input")
    .val()
    .trim();
  email = $("#email-input")
    .val()
    .trim();
  comment = $("#comment-input")
    .val()
    .trim();

  database.ref().set({
    name: name,
    email: email,
    comment: comment
  });
});

// Firebase watcher + initial loader HINT: .on("value")
database.ref().on(
  "value",
  function(snapshot) {
    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().email);
    console.log(snapshot.val().comment);

    // Change the HTML to reflect
    $("#name-display").text(snapshot.val().name);
    $("#email-display").text(snapshot.val().email);
    $("#comment-display").text(snapshot.val().comment);

    // Handle the errors
  },
  function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  }
);
