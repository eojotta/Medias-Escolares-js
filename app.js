/*****************************************************
* Objetivo : Sistemas  de Médias Escolares
* Autor : João Pedro
* Data : 27/02
* Versão : 1.0
******************************************************/

const readline = require('readline')
const calculos = require('./calculo.js')

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entrada.question("Nome do aluno: ", function (nomeAluno) {

    if (nomeAluno.trim() == "") {
        console.log("Erro: Nome do aluno não pode ficar vazio.")
        return entrada.close()
    }

    entrada.question("Sexo do aluno (M/F): ", function (sexoAluno) {

        entrada.question("Nome do professor: ", function (nomeProfessor) {

            if (nomeProfessor.trim() == "") {
                console.log("Erro: Nome do professor não pode ficar vazio.")
                return entrada.close()
            }

            entrada.question("Sexo do professor (M/F): ", function (sexoProfessor) {

                entrada.question("Nome do curso: ", function (nomeCurso) {

                    entrada.question("Nome da disciplina: ", function (nomeDisciplina) {

                        entrada.question("Nota 1: ", function (n1) {
                            entrada.question("Nota 2: ", function (n2) {
                                entrada.question("Nota 3: ", function (n3) {
                                    entrada.question("Nota 4: ", function (n4) {

                                        if (!calculos.validarNota(n1) ||
                                            !calculos.validarNota(n2) ||
                                            !calculos.validarNota(n3) ||
                                            !calculos.validarNota(n4)) {

                                            console.log("Erro: As notas devem estar entre 0 e 100.")
                                            return entrada.close()
                                        }

                                        let nota1 = Number(n1)
                                        let nota2 = Number(n2)
                                        let nota3 = Number(n3)
                                        let nota4 = Number(n4)

                                        let media = calculos.calcularMedia(nota1, nota2, nota3, nota4)
                                        let status = calculos.definirStatus(media)

                                        let palavraAluno = sexoAluno.toUpperCase() == "F" ? "A aluna" : "O aluno"
                                        let palavraProfessor = sexoProfessor.toUpperCase() == "F" ? "Professora" : "Professor"

                                        if (status == "EXAME") {

                                            entrada.question("Nota do Exame: ", function (notaExame) {

                                                if (!calculos.validarNota(notaExame)) {
                                                    console.log("Erro: Nota do exame inválida.")
                                                    return entrada.close()
                                                }

                                                let notaEx = Number(notaExame)
                                                let mediaFinalExame = calculos.calcularMediaExame(media, notaEx)

                                                let statusFinal = mediaFinalExame >= 60 ?
                                                    "APROVADO NO EXAME" : "REPROVADO NO EXAME"

                                                console.log("\nRelatório do aluno:")
                                                console.log(`${palavraAluno} ${nomeAluno} foi ${statusFinal} na disciplina ${nomeDisciplina}.`)
                                                console.log(`Curso: ${nomeCurso}`)
                                                console.log(`${palavraProfessor}: ${nomeProfessor}`)
                                                console.log(`Notas: ${nota1}, ${nota2}, ${nota3}, ${nota4}, ${notaEx}`)
                                                console.log(`Média Final: ${media.toFixed(2)}`)
                                                console.log(`Média Final do Exame: ${mediaFinalExame.toFixed(2)}`)

                                                entrada.close()
                                            })

                                        } else {

                                            console.log("\nRelatório do aluno:")
                                            console.log(`${palavraAluno} ${nomeAluno} foi ${status} na disciplina ${nomeDisciplina}.`)
                                            console.log(`Curso: ${nomeCurso}`)
                                            console.log(`${palavraProfessor}: ${nomeProfessor}`)
                                            console.log(`Notas: ${nota1}, ${nota2}, ${nota3}, ${nota4}`)
                                            console.log(`Média Final: ${media.toFixed(2)}`)

                                            entrada.close()
                                        }

                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})