function operacion() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let tipoope = document.getElementById("tipo").value;
    let resultado;
    let operacionTexto;

    switch (tipoope) {
        case "suma":
            resultado = n1 + n2;
            operacionTexto = `${n1} + ${n2} = ${resultado}`;
            break;

        case "resta":
            resultado = n1 - n2;
            operacionTexto = `${n1} - ${n2} = ${resultado}`;
            break;

        case "multiplicacion":
            resultado = n1 * n2;
            operacionTexto = `${n1} x ${n2} = ${resultado}`;
            break;

        case "division":
            if (n2 !== 0) {
                resultado = n1 / n2;
                operacionTexto = `${n1} ÷ ${n2} = ${resultado}`;
            } else {
                operacionTexto = "Error: No se puede dividir por 0";
            }break;

        default:
            operacionTexto = "Operación no válida";

        if(isnumber(n1) && isnumber(n2)) 
    }


function isnumber(){
    return isNaN(parceInt(n) && isFinite(n))
}

    // Mostramos la operación completa en la página
    document.getElementById("resultado").innerHTML = "La operación es: " + operacionTexto;
}
