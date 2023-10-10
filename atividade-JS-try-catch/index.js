const nota1 = Number(prompt('Digite a primeira nota:'));
const nota2 =  Number(prompt('Digite a segunda nota:'));

try{
    if(isNaN(nota1) || isNaN(nota2)){
        throw new Error('Erro: digite um número válido')
    } else {
        const media = (nota1 + nota2) / 2
      media > 7 ? alert(`Passsou, com a media ${media.toFixed(1)}`) : alert(`Reprovado, com a media ${media.toFixed(1)}`)
    }

}catch(err){
    console.log(err.message) 

}finally{
    console.log("Sistema de média da escola de música")
}