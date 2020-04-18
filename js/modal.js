//modalFormulario//
const modalFunction = (validateModal) => {
  let ventana = document.getElementById("miVentana");
  if (ventana) ventana.style.display = validateModal ? "block" : "none";
};

// Modal Terminos //

var modalTerminos = document.getElementById("modalTerminos");
var enlace = document.getElementById("terminos");
var close = document.getElementsByClassName("close")[0];

enlace.addEventListener("click", function () {
  $("#modalBlur").addClass("blur");
  modalTerminos.style.display = "flex";
});

close.addEventListener("click", function () {
  $("#modalBlur").removeClass("blur");

  modalTerminos.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modalTerminos) {
    modalTerminos.style.display = "none";
    $("#modalBlur").removeClass("blur");
  }
});
window.addEventListener("keydown", function (e) {
  if (e.keyCode == 27 && modalTerminos.style.display == "flex") {
    $("#modalBlur").removeClass("blur");
    modalTerminos.style.display = "none";
  }
});

// Javascritp
document.getElementById("terminos").addEventListener("click", lol);
function lol() {
  let body = document.getElementById("body");
  body.style.overflow = "hidden";
}

document.querySelector(".close").addEventListener("click", cerrar);

function cerrar() {
  let body = document.getElementById("body");
  body.style.overflow = "scroll";
}
