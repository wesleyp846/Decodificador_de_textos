//Esse TexTo TeM MuiTAs LETRAS EMBARALHADAS 

// function criptografar(){
//   crip = criptografia(pegaTextoI());
//   addCrip(crip);
//   exibenatela();
// }

// function addCrip(crip){
//   let surge = document.getElementById("apareci");
//   surge.innerHTML = crip;
// }


function criptografar(texto){
  let crip = criptografia(pegaTexto(texto));
  addTexto(crip);
  console.log(crip, "\n\nfun criptografar var crip");
}

function addTexto(crip){
  document.getElementById('output-texto').value = crip;
}

function pegaTexto(idtexto){
  let texto = document.getElementById(idtexto).value;
  texto = tansformaTexto(texto);
  limpaTexto(idtexto);
  return texto;
}

function tansformaTexto(texto){
  texto = texto.trim().toLowerCase();
  return texto;
}

function limpaTexto(idtexto){
  document.getElementById(idtexto).value = "";
}

function criptografia(texto){
  let mensagem = texto.
      replaceAll("e", "enter").
      replaceAll("i", "imes").
      replaceAll("a", "ai").
      replaceAll("o", "ober").
      replaceAll("u", "ufat");
  return mensagem;
}

function descriptografia(texto){
  let mensagem = texto.
  replaceAll("enter", "e").
  replaceAll("imes", "i").
  replaceAll("ai", "a").
  replaceAll("ober", "o").
  replaceAll("ufat", "u");
  return mensagem;
}