console.log('>>>script.js');

$(document).ready(function($) {
    //timer POMODORO
    $("#timer").hide();
$("#timerStart").click(function(){
    new Circlebar({
        element: "#timer",
        skin: "yellow",
        size: "200px",
    });
    $("#timer").show();
})
$("#timerPause").click(function(){
    // swal("Good job!", "You clicked the button!", "success");
    alert("Prenez donc une petite pause mes choupinouX!")
    // $(Circlebar).stop();

})
    // $(".input-group").each(function(index, el) {
    //     Sortable.create(el);
    // });
    var toDo = document.getElementById("toDo");
    $(toDo).css("height", "100%")
    Sortable.create(toDo, {
        group: "toDo"
    });

    function newTask(text) {
        var task = $('<div>');
        task.addClass("input-group input-group-sm mb-3");
        var textTask = $('<p>');
        textTask.addClass("form-control").text(text);
        var trash = $('<div class="input-group-append"><button class="deleteTask btn btn-outline-secondary" type="button"><i class="far fa-trash-alt"></i></button></div>');
        task.append(textTask);
        task.append(trash);

        $(toDo).append(task);
        initTaskFunctions();
    }
    function initTaskFunctions(){
        $(".deleteTask").click(function() {
            console.log($(this).parent());
            $(this).parent().parent().remove();
        });

    }

    $("#addTask").click(function() {

        if ($("#newTask").val() == "") {
            alert("Miaou!") ;
        }
        else{
            newTask($("#newTask").val());
            $("#newTask").val('');
        }
    });
    setInterval(function () {
        if ($(".text").text() === "00:00:30") {
            var finishedTash = $("#toDo div").first();
            $("#down").append(finishedTash);
        }
console.log($(".text").text());
    }, 1000);
});
