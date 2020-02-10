var boton = document.getElementById("animar");
boton.addEventListener('click', e=> {
    document.body.classList.toggle('animar');
    e.target.textContent == "Animar" ? e.target.textContent = 'Detener' : e.target.textContent = "Animar";
});