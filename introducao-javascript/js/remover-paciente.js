var pacientes = document.querySelectorAll(".paciente");


var tabela = document.querySelector("table");

//console.log(tabela);

tabela.addEventListener("dblclick", function(event) {
  console.log(event.target.tagName);

  if(event.target.tagName == "TD"){

    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
      event.target.parentNode.remove(); // TR = paciente = remover
    },500);

  }

});

// pacientes.forEach( function(paciente) => {
//   paciente.addEventListener("dbclick", function(){
//     this.remove();
//   });
// });
