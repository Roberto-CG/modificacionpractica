/* Autor: Roberto Corcuera García
Fecha: 27/06/2019
Descripción: Examen del MF0952_2 */
function validarForm() {

  let nom = document.forms[0].elements["txtnombre"];
  if (nom.value.length === 0) {
    alert("Se requiere un nombre de usuario. ");
    return false;
  } else {
    alert(`Hola ${nom.value}.`);
    return true;
  }
}