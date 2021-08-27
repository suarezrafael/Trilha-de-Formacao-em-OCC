var titulo = document.querySelector(".titulo");
//console.log(titulo);
//console.log(titulo.textContent);
titulo.textContent = "Aparecidade Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0 ; i < pacientes.length; i++){

  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector('.info-peso');
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var pesoEhValido = true;
  var alturaEhValida = true;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if (!pesoEhValido) {
      //console.log("Peso inválido!");
      pesoEhValido = false;
      tdImc.textContent = "Peso inválido!";
      paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValida) {
   //console.log("Altura inválida!");
   alturaEhValida = false;
   tdImc.textContent = "Altura inválida!";
   paciente.classList.add("paciente-invalido");
 }

  if(alturaEhValida && pesoEhValido){
    var imc = calculaImc(peso, altura);

    tdImc.textContent = imc;
  }
}
titulo.addEventListener("click", function(){
  console.log("Titulo clicado.");
});

function calculaImc(peso, altura){
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

function validaPeso(peso){

    if (peso >= 0 && peso <= 300) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}
