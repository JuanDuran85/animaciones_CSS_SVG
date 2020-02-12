var boton = document.getElementById("boton");
var circulo2 = document.getElementById("circulo2");

boton.addEventListener('click', function(){
    document.body.classList.add('animar');
    circulo2.addEventListener('transitionend', function (e) {
        console.log(e);
        if (e.propertyName == "top") {
            document.body.classList.remove('animar');
        }
    });
});