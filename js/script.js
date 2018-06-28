console.log('>>>script.js');
// <div class="input-group mb-3">
//     <input type="text" class="form-control" placeholder="Nouvelle t&acirc;che" aria-label="task" aria-describedby="basic-addon2">
//     <div class="input-group-append">
//         <button class="btn btn-outline-secondary" type="button">Ajouter votre T&acirc;che</button>
//     </div>
// </div>

$(document).ready(function($) {
    //timer POMODORO
    new Circlebar({
        element : "#timer",
        skin : "yellow",
        size : "200px",
    });
});
