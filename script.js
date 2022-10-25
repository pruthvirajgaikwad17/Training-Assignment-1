function show(eve) {
  var currentTab = document.getElementById("content");
  var currentLink = document.getElementsByClassName("links");

  currentTab.style.display = "block";

  for (var i = 0; i < currentLink.length; i++) {
    document.getElementsByClassName("links")[i].classList.remove("active");
  }

  if (eve == 0) {
    document.getElementById("content").innerHTML = "This country is India";
    document.getElementsByClassName("links")[eve].classList.add("active");
  } else if (eve == 1) {
    document.getElementById("content").innerHTML = "This country is Sri Lanka";
    document.getElementsByClassName("links")[eve].classList.add("active");
  } else if (eve == 2) {
    document.getElementById("content").innerHTML = "This country is Nepal";
    document.getElementsByClassName("links")[eve].classList.add("active");
  }
}
