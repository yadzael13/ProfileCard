// Ventanas principales
const welcomeSection = document.querySelector(".welcome--section");
const cardSection = document.querySelector(".card--section");

// ventanas de la terjeta
const cardInfo = document.querySelector(".card--info");
const cardInfoUser = document.querySelector(".card--info--user");

// Botones
const verTarjeta = document.querySelector("#VerTarjetaButton");
const close = document.querySelector(".close");
const verInfo = document.querySelector(".yadza");
const back = document.querySelector(".back");

// info otones
const toggleMail = document.querySelector(".toggleMail");
const togglePhone = document.querySelector(".togglePhone");
const toggleGit = document.querySelector(".toggleGit");
const contactH3 = document.querySelector(".contact--show--h3")


// asignaciones
verTarjeta.addEventListener("click", () => {
  togglePrincipalWindows()
});
close.addEventListener("click", () => {
  togglePrincipalWindows()
});
verInfo.addEventListener("click", () => {
  verInfoToggle()
});
back.addEventListener("click", () => {
  verInfoToggle()
});

// contacto

toggleMail.addEventListener("click", () => {
  toggleInfoContact("mail")
});
togglePhone.addEventListener("click", () => {
  toggleInfoContact("phone")
});
toggleGit.addEventListener("click", () => {
  toggleInfoContact("git")
});




// Funciones
function verInfoToggle() {
  cardInfoUser.classList.toggle("card--info--user--on");
  cardInfo.classList.toggle("card--info--off");
  contactH3.innerHTML = " ";
}

function togglePrincipalWindows() {
  welcomeSection.classList.toggle("welcome--section--off");
  cardSection.classList.toggle("card--section--on");

  contactH3.innerHTML = " ";
  if (cardInfoUser.classList.contains("card--info--user--on") == true) {
    verInfoToggle();
  }
}



function toggleInfoContact(x) {
  this.x = x;
  if (x == "mail") {

    contactH3.innerHTML = "yadzael13@gmail.com";

  } else if (x == "phone") {

    contactH3.innerHTML = "55 11 56 45 83";

  } else if (x == "git") {

    contactH3.innerHTML = "yadzael13";

  }

}
