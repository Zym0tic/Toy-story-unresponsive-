console.log("To infinity and beyond.");

// write your JavaScript here

function showRating() {
  let output = document.getElementById("rating").value;
  document.getElementById("rated").innerHTML =
    "You said it was " + output + "!";
}
