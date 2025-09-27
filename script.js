document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Gracias por tu mensaje. Me pondré en contacto pronto.");
  this.reset();
});
