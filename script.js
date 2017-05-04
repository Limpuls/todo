(function () {
var button = document.getElementsByTagName("button");
var userInput = document.getElementById("user_input");
var entered = false;
var executed = false;
function addItem() {
  if (!entered) {
    categorize();
  }

  if (!executed) {
    categorizeDone();
  }

  var li = document.createElement("li");
  li.id = "item";
  li.innerHTML = userInput.value;
  var item = document.getElementsByTagName("ul")[0].appendChild(li);
  //creating and appending check svg icon to a list item
  var checkMark = document.createElement("div")
  checkMark.id = "check_mark";
  checkMark.className = "check_mark";
  item.appendChild(checkMark);
//creating and appending delete svg icon to a list item
  var deleteMark = document.createElement("div");
  deleteMark.id = "delete_icon";
  deleteMark.className = "delete_icon";
  item.appendChild(deleteMark);
    //moving an item to a complete list when clicked on check svg icon
    checkMark.onclick = function () {
      var that = this.parentNode;
      var doneList = document.getElementById("done");
      doneList.appendChild(that);

      var ulItems = document.getElementsByTagName("ul")[0].childNodes;
      //if there is no more items left in to-do list, delete the to-do list label
      if (ulItems.length == 2) {
        ulItems[1].remove();
        var completedMessage = document.createElement("h1");
        completedMessage.id = "completed_message";
        completedMessage.innerHTML = "Congrats, you completed the list!";
        document.getElementsByTagName("body")[0].appendChild(completedMessage);
      }
    }
    //deleting an item from a list when clicked on a delete svg icon
    deleteMark.onclick = function () {
      var that = this.parentNode;
      that.remove();
      /*var ulItems = document.getElementsByTagName("ul")[0].childNodes;
      //if there is no more items left in to-do list, delete the to-do list label
      if (ulItems.length == 2) {
        ulItems[1].remove();
        var completedMessage = document.createElement("h1");
        completedMessage.id = "completed_message";
        completedMessage.innerHTML = "Congrats, you completed the list!";
        document.getElementsByTagName("body")[0].appendChild(completedMessage);
      }*/
      var doneUlItems = (document.getElementsByTagName("ul")[1]);
      if ((doneUlItems).childNodes.length == 1) {
        doneUlItems.remove();
      }
    }

  userInput.value = "";
}


function categorize() {
    entered = true;
    var h1 = document.createElement("h1");
    h1.innerHTML = "to-do";
    var listCreation = document.createElement("li");
    listCreation.id = "list";
    var listForLabel = document.getElementById("todo").appendChild(listCreation);
    listForLabel.appendChild(h1);
}

function categorizeDone() {
  executed = true;
  var h1 = document.createElement("h1");
  h1.innerHTML = "Done";
  var listCreation = document.createElement("li");
  listCreation.id = "list";
  var listForLabel = document.getElementById("done").appendChild(listCreation);
  listForLabel.appendChild(h1);
}



button[0].addEventListener("click", addItem, false);



})();
