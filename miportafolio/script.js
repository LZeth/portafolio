const getCurrentYear = () => {
  const d = new Date();
  return d.getFullYear(); // 2022
};

// Función que agrega el año actual en el Footer
const setYearIdentifierSpan = () => {
  const printYearInDOM = document.getElementById("yearIdentifier");
  printYearInDOM.innerText = getCurrentYear();
};

// Arreglo de Redes sociales
const SocialNetworks = [
  { name: "Twitter", url:"https://twitter.com/?lang=es", icon: "" },
  { name: "Facebook", url:"https://www.facebook.com/", icon: "" },
  { name: "Linkedin", url:"https://www.linkedin.com/", icon: "" },
  { name: "Gmail", url:"https://www.google.com/intl/es-419/gmail/about/", icon: "" },
];

// Función que ejecuta todo el proceso de creación de red social y
// lo inyecta en el HTML
function setSocialNetworksInHTML() {
  const tagSocialNetworks = document.getElementById("socialNetworks");
  var innerHtmlSocialNetworks = "";
  SocialNetworks.forEach((social) => {
    let socialTemp;
    if (social.name === "Twitter") {
      socialTemp = `<span class="social--burbble" style="background-color: #0EAADC;">${social.name}</span>`;
    } else if (social.name === "Facebook") {
      socialTemp = `<span class="social--burbble" style="background-color: #0E59DC;">${social.name}</span>`;
    } else if (social.name === "Linkedin") {
      socialTemp = `<span class="social--burbble" style="background-color: #2956CF;">${social.name}</span>`;
    } else if (social.name === "Gmail") {
      socialTemp = `<span class="social--burbble" style="background-color: #4357ab;">${social.name}</span>`;
    }

    innerHtmlSocialNetworks = innerHtmlSocialNetworks + socialTemp;
  });
  tagSocialNetworks.innerHTML = innerHtmlSocialNetworks;
}

const ProyectosDesarrollados = [
  {
    name: "Portafolio",
    descripcion: `This is a wider card with supporting text 
        below as a natural lead-in to additional content. 
        This content is a little bit longer`,
    imagen: "",
    url: "",
    tecnologias: ["Html", "CSS", "JS", "Bootstrap"],
    tiempoDesarrollo: "5 días",
  },
  {
    name: "Tienda de celulares",
    descripcion: `This is a wider card with supporting text 
    below as a natural lead-in to additional content. 
    This content is a little bit longer.`,
    imagen: "",
    url: "",
    tecnologias: ["Html", "CSS", "JS", "Bootstrap"],
    tiempoDesarrollo: "10 días",
  },
];

// Pila de ejecución hasta que el DOM esta completamente cargado
document.addEventListener("DOMContentLoaded", function (e) {
  setYearIdentifierSpan();
  setSocialNetworksInHTML();
});

