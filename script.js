let cartas=[];
let numeroCartas;

function avaliarJogo(){
    numeroCartas= document.querySelector(".cartas");
numeroCartas= prompt("Com quantas cartas deseja jogar?(4 à 14)");
// condições de jogo:
//  precisa ser apenas numeros pares %2===0
// precisa ser sombre numeros 
// precisa ser numero maior que 4 e menor que 15
    if(numeroCartas < 4 || numeroCartas >15){
    alert("Esse modo não é permitido, tente novamente");
    avaliarJogo();

}        if ( numeroCartas%2 === 0){
                alert("tudo certo, bora bora");
                numeroCartas=numeroCartas;
                alert(numeroCartas);
                                   }
            else { 
                alert("Só números pares por favor né, nem adianta botar letras...");
                   avaliarJogo();}
                 }
avaliarJogo();

for( numeroCartas; numeroCartas<6 ; numeroCartas++){
    alert(help);

}


