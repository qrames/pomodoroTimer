console.log('>>>script.js');

$(document).ready(function($) {
    //timer POMODORO
    new Circlebar({
        element: "#timer",
        skin: "yellow",
        size: "200px",
    });
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
        newTask($("#newTask").val());
        $("#newTask").val('');
    });
});
