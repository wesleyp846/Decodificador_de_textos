let crip = "";
let dcrip = "";

function criptografar(){
    crip = criptografia(pegaTextoI());
    addCrip(crip);
    exibenatela();
}

function descriptografar(){
    dcrip = descriptografia(pegaTextoI());
    addCrip(dcrip);
    exibenatela();
}

function botaoCopiar(){
    copiatexto();
    exibenatela();
}

function addCrip(crip){
    let surge = document.getElementById("apareci");
    surge.innerHTML = crip;
}

function pegaTextoI(){
    let texto = document.getElementById("input-texto").value;
    texto = texto.toLowerCase();
    console.log(texto, "debugando minuscuas")
    return texto;
}

function pegaTextoO(){
    let texto = crip;
    console.log(crip, "dentro da funcao pataTextoO");
    return texto;
}

function exibenatela(){
    let div = document.querySelector(".saida_de_texto");
    let filhos = div.querySelectorAll("div");
    alteravisibilidade(filhos);
}

function alteravisibilidade(lista){
    lista.forEach(filho => {
        if (filho.style.display == "none"){
            filho.style.display = "block";
        } else {
            if (filho.style.display == "block"){
                filho.style.display = "none";
            }else{console.log("Erro no condicional function exibenatela()")}
        }
    });
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

function copiatexto(){
    // Remove qualquer seleção anterior da área de transferência
    window.getSelection().removeAllRanges();
    let ver = document.getElementById("apareci");
    let intervalo = document.createRange();
    intervalo.selectNode(ver);
    // Adiciona a nova seleção à área de transferência
    window.getSelection().addRange(intervalo);
    // Copia o conteúdo selecionado para a área de transferência
    document.execCommand('copy');
}