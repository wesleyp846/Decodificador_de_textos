//Esse TexTo TeM MuiTAs LETRAS EMBARALHADAS 

function criptografar(texto){
  let crip = criptografia(pegaTexto(texto));
  addTexto(crip, 'output-texto');
}

function descriptografar(texto){
  let crip = descriptografia(pegaTexto(texto));
  addTexto(crip, 'input-texto');
}

function addTexto(crip, lugar){
  document.getElementById(lugar).value = crip;
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

function copiar(areaDeCopy){
  let texto = document.getElementById(areaDeCopy).value;
  let areaDeTransferencia = document.createElement("textarea");
  areaDeTransferencia.value = texto;
  document.body.appendChild(areaDeTransferencia);
  areaDeTransferencia.select();
  document.execCommand("copy");
  document.body.removeChild(areaDeTransferencia);
}