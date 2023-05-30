function guardar(){
  db.collection("articles").add({
  nombre: document.getElementById("nameField").value,
  apellido: document.getElementById("lastField").value,
  correo: document.getElementById("emailField").value,
 })
   .then((docRef) => {
     alert("registro exitoso")
 })
  .catch((error) => {
     alert("Error en el registro")
 });
 }