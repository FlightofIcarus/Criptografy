export function cript(text) {
    let codificar = text;

    let codificado = codificar.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    
    return codificado;
    
}

