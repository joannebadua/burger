//make sure we wait to attach our handlers until the DOM is fully loaded
$(function(){
    $(".change-devoured").on("click", function(event){
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");
        console.log("new devoured state", newDevoured);
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
$("#submit").on("click", function(event){
    //make sure to preventDefault on a submit event
    event.preventDefault();
    var newBurger = {
        burger_name: $("#bur").val().trim(),
        devoured: 0
    };
    console.log(newBurger);
//send  POST request
$.ajax("/burgers", {
    type: "POST",
    data: newBurger
}).then(
    function(data) {
        console.log("created new burger at id:", data)
        //reload page to get updated list
        location.reload();
    }
);   
});
});