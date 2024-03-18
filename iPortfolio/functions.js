function copyEmail() {
  var email = "miguelangelbravo2000@gmail.com";
  var tempInput = document.createElement("input");
  tempInput.value = email;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  var copyMessage = document.getElementById("copyMessage");
  copyMessage.style.color = "white"; // Cambia el color del texto a blanco

  copyMessage.style.display = "block";

  setTimeout(function () {
    copyMessage.style.display = "none";
  }, 2000);
}

function openModal(link) {
  // Obtiene el iframe del modal
  var modalFrame = document.getElementById("modalFrame");

  // Establece el src del iframe con el enlace proporcionado
  modalFrame.src = link;

  // Muestra el modal
  $("#myModal").modal("show");
}

//Este apartado lo uso para que no se pueda hacer scroll en toda la pantalla en caso de estar sobre la aplicacion-->
var iframeContainer = document.getElementById("iframeContainer");

function disablePageScroll() {
  document.body.style.overflow = "hidden";
}

function enablePageScroll() {
  document.body.style.overflow = "";
}
//_____________________________________________________________________________________________________________-->
