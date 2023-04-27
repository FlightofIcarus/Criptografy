export function criptBinary(text) {
    let codificar = [...text];
    
    let codificado = [];
    
    codificar.map((valor) => {let letra = valor;
        
        codificado.push((letra.charCodeAt()>>> 0).toString(2));

    });
       
    let result = codificado.join('');

    return result;
    
}

console.log(criptBinary("vamos ver se funciona"));

