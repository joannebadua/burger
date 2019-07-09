//make sure we wait to attach our handlers until the DOM is fully loaded
$(function(){
    $(".change-devoured").on("click", function(event){
        var id = $(this).data("id");
        var newDevoured = $(this).data("newDevoured");
        var newDevouredState = {
            devoured: newDevoured
        };
    //send the PUT request
    $.ajax("/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
    }).then(
        function(){
            console.log("changed devoured to", newDevoured);
            //reload page to get updated list
            location.reload();
        }
    );
    });
$("#bur").on("submit", function(event){
    //make sure to preventDefault on a submit event
    event.preventDefault();
    var newBurger = {
        name: $("#burgers").val().trim(),
        devoured: $("[name=devoured]: checked").val().trim()
    };
//send  POST request
$.ajax("/burgers", {
    type: "POST",
    data: newBurger
}).then(
    function() {
        console.log("created new burger")
        //reload page to get updated list
        location.reload();
    }
);   
});
});