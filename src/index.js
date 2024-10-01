let input = document.getElementsByTagName("input");
let inputs = document.querySelectorAll("#form input");
let form = document.getElementById("form");
let textarea = document.getElementsByTagName("textarea");
const radioButtons = document.querySelectorAll('input[name="enquiry"]');

const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  last_name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const campos = {
  username: false,
  lastname: false,
  email: false,
};

const validarForm = (e) => {
  switch (e.target.name) {
    case "username":
      validarCampo(expresiones.name, e.target, ".username");

      break;
    case "lastname":
      validarCampo(expresiones.name, e.target, ".lastname");

      break;
    case "email":
      validarCampo(expresiones.name, e.target, ".email");

      break;

    default:
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    let container = document.querySelector(`${campo}`);
    let textErr = container.querySelector(".textoError");
    textErr.style.visibility = "hidden";
    campos[campo]= true;
  } else {
    let container = document.querySelector(`${campo}`);
    let textErr = container.querySelector(".textoError");
    textErr.style.visibility = "visible";
    campos[campo]= false;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarForm);
  input.addEventListener("blur", validarForm);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs1 = form.querySelectorAll("input");

  inputs1.forEach((input) => {
    // Validación para inputs tipo radio
    if (input.type === "radio") {
      let groupName = input.getAttribute("name");
      let isChecked = document.querySelector(
        `input[name="${groupName}"]:checked`
      );

      let container = document.querySelector(".enquiry");
      let textErr = container.querySelector(".textoError");

      if (!isChecked) {
        textErr.style.visibility = "visible";
      } else {
        textErr.style.visibility = "hidden";
      }
    }

    // Validación para inputs tipo checkbox
    if (input.type === "checkbox") {
      let container = input.closest("div");
      let textErr = container.querySelector(".textoError");

      if (!input.checked) {
        textErr.style.visibility = "visible";
        isValid = false; // Marcar como inválido
      } else {
        textErr.style.visibility = "hidden";
      }
    }
  });

  const terms= Document.getElementById('terms');

  if(campos.name  && campos.lastname && campos.email && terms.checked){

    form.reset();

  }


});

// let inputArr = Array.from(input);
// console.log(inputArr);

radioButtons.forEach((radio) => {
  radio.addEventListener("change", () => {
    // Primero, quita el color de borde y el fondo de todos los contenedores
    radioButtons.forEach((rb) => {
      const container = rb.closest("div");
      container.style.borderColor = "var(--quaternary-light)"; // Color original
      container.style.background = "transparent"; // Restaura el fondo original
      container.style.borderWidth = "1px"; // Restaura el ancho del borde original
    });

    // Luego, cambia el color de borde y el fondo del contenedor del botón de radio seleccionado
    const selectedContainer = radio.closest("div");
    selectedContainer.style.borderColor = "#497A6C";
    selectedContainer.style.borderWidth = "2px";
    selectedContainer.style.background = "#E0F1E7";
  });
});



const formData = new FormData(form);

const data = Object.fromEntries(formData);
console.log(data);

fetch('data.json', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
 });


