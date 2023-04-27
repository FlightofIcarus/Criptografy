export function criptReverse(text) {
    let codificar = [...text];

    let codificado = codificar.reverse();
    
    let result = codificado.join('');
 
    return result;
    
}

