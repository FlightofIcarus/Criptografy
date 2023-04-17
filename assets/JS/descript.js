export function descript(text) {
    let codificar = text;

    let codificado = codificar.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    
    return codificado;
    
}

