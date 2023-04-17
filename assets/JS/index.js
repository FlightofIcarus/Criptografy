function show(operation) {
    const Resposta = document.querySelector("#respost");
    const RespArea = document.querySelector("aside")
    if(inputText.value == "") {
        RespArea.style.background = "#fff url(../assets/images/bg-find.svg) no-repeat center";
        Resposta.style.margin = "60vh 32px";
        Resposta.innerHTML = noTextInputed;
    } else {
    RespArea.style.background = "#fff";
    Resposta.style.margin = "32px auto"
    Resposta.innerHTML = `<p>${operation}</p>`;
}
}

let inputText = document.querySelector("#textinput");
let textIn = "";

inputText.addEventListener("input", () => textIn = inputText.value)

console.log(inputText.value)

document.querySelector("#cript").addEventListener("click", () => {
    import ("./cript.js")
        .then(module => show(module.cript(textIn)))
    })

document.querySelector("#descript").addEventListener("click", () => {
    import ("./descript.js")
        .then(module => show(module.descript(textIn)))
    })
    
let noTextInputed = "<h2>Nenhuma mensagem encontrada</h2><p id='result'>Digite um texto que você deseja criptografar ou descriptografar.</p>"