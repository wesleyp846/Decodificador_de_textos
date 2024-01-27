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

//Ao apertar o botão copiar ___________________________________________________
function botaoCopiar(){
    copiatexto();
}

function addCrip(crip){
    let surge = document.getElementById("apareci");
    surge.innerHTML = crip;
}

function pegaTextoI(){
    let texto = document.getElementById("input-texto").value;
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
    filhos.forEach(filho => {
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
    console.log(mensagem);
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
    alert('Conteúdo copiado para a área de transferência!');
    console.log(ver);
    console.log(intervalo);
    console.log(window.getSelection(), "ultima copia");
}