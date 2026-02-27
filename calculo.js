
// calculo.js

const validarNota = function(nota){
    let valor = Number(nota)

    if(isNaN(valor) || valor < 0 || valor > 100){
        return false
    }

    return true
}

const calcularMedia = function(n1, n2, n3, n4){
    return (n1 + n2 + n3 + n4) / 4
}

const calcularMediaExame = function(media, notaExame){
    return (media + notaExame) / 2
}

const definirStatus = function(media){
    if(media >= 70){
        return "APROVADO"
    }else if(media < 50){
        return "REPROVADO"
    }else{
        return "EXAME"
    }
}

module.exports = {
    validarNota,
    calcularMedia,
    calcularMediaExame,
    definirStatus
}


