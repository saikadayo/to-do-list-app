function newItem() {
  // Add a new item to the list
  let li = $("<li>");
  let inputValue = $("#input").val().trim();
  let text = document.createTextNode(inputValue);
  li.append(text);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $("#list").append(li);
  }

  // Cross out an item
  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", crossOut);

  // Include delete button
  let crossOutButton = $("<button>").text("X");
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);

  // Adding delete class once deleted
  function deleteListItem() {
    li.addClass("delete");
  }

  // Ability to reorder
  $("#list").sortable();
}

  // Additional Event Listener for being able to use "Enter" key to add to list
$("#input").on("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
    newItem(); 
    $("#input").val(''); 
  }
});
