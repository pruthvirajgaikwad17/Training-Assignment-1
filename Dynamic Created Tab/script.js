var index = 0;
function create() {
  var newTabName = document.getElementById("new-name").value;
  console.log(newTabName);
  var tag = document.createElement("button"); // <button></button>
  var text = document.createTextNode(newTabName);
  tag.appendChild(text); // <button>{newTabName}</button>
  var element = document.getElementsByClassName("tab")[0];
  element.appendChild(tag);
  tag.name = index; // it used for giving name property to button
  index = index + 1;
  var newContent = document.getElementById("myTextarea").value;
  /*var ptag = document.createElement("p"); // <p></p>
  var ptext = document.createTextNode(newContent);
  ptag.appendChild(ptext); // <p>{newContent}</p>

  ptag.className = "content"; //<p class="content"></p>

  tag.onclick = function () {
    var pelement = document.getElementsByClassName("ptab")[0];
    pelement.appendChild(ptag);
    pelement.style.display = "none";
  };*/

  tag.className = "links";
  var currentLink = document.getElementsByClassName("links");
  console.log(currentLink);
  tag.onclick = function (name) {
    for (var i = 0; i < document.getElementsByClassName("links").length; i++) {
      document.getElementsByClassName("links")[i].classList.remove("active");
    } //remove all the active tags
    var currentTab = document.getElementById("content");

    currentTab.style.display = "block";

    document.getElementById("content").innerHTML = newContent; // print the content of the tag

    document.getElementsByClassName("links")[tag.name].classList.add("active"); // define the active tags
  };
}
