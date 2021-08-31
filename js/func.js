//cambia la imagen en forma dinamica
$( document ).ready(function() {
    let n = parseInt(Math.random() * (8 - 1) + 1);
    
    $("body").attr("style","background-image: url('img/f" + n + ".jpg') ;  background-size:cover ; background-repeat:no-repeat; ");
     
});