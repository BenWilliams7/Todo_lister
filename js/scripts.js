//Business Logic//

function ThingsToDo(things, isDone) {
  this.things = things;
  this.isDone = isDone;
}

function resetFields() {
    $("input#thing-to-do").val("");
}


<!-- User Logic  -->

$(function() {

  $("form").submit(function(e){
    e.preventDefault();
    var inputtedToDo = $("input#thing-to-do").val();
    var isItDone = false;
    var newToDo = new ThingsToDo(inputtedToDo, isItDone);

    //cool stuff:
    $('<li><span class="listItem">')
      .text(newToDo.things)
      .click(function() {
        $(this).toggleClass("strike");
      })
      .appendTo('ul#added-to-list');
    resetFields();
  });
});
