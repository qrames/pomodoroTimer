console.log('>>>script.js');
// <div class="input-group mb-3">
//     <input type="text" class="form-control" placeholder="Nouvelle t&acirc;che" aria-label="task" aria-describedby="basic-addon2">
//     <div class="input-group-append">
//         <button class="btn btn-outline-secondary" type="button">Ajouter votre T&acirc;che</button>
//     </div>
// </div>

$(document).ready(function($) {
    //timer POMODORO
    function time(){
        $("#timer").value
    }
    new Circlebar({
        element : "#circle-1"
    });
    $("#circle-1").Circlebar({
        skin: "yellowcircle",
        maxValue: 25,
        fontSize: "14px",
        triggerPercentage: true
    });
});
