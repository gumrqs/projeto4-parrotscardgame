const cartas=[];
let numeroCartas;

function validarNumeroCartas(){
    
    numeroCartas= prompt("Com quantas cartas deseja jogar?(4 à 14)");
// condições de jogo:
//  precisa ser apenas numeros pares %2===0
// precisa ser sobre numeros 
// precisa ser numero maior que 4 e menor que 15
    if(numeroCartas < 4 || numeroCartas >15)
    {
         alert("Esse modo não é permitido, tente novamente");
         validarNumeroCartas();

    }        
        if ( numeroCartas%2 === 0)
                {
                alert("tudo certo, bora bora");
                }
            else { 
                alert("Só números pares por favor né, nem adianta botar letras...");
                validarNumeroCartas();}
                 }
 validarNumeroCartas();

for(let index=0; index<numeroCartas; index++){
    const cartasTemplate= 
    `<div class="cartas">
        
        <div class="frente face" onclick="selecionar(this)">
        <img class="imagens" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png" alt="">
        </div>
        <div class="verso face" onclick="selecionar(this)">
        <img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/fiestaparrot.gif" alt="">
        </div>
      </div>`
    document.querySelector(".container-cartas").innerHTML+= cartasTemplate;   
}

