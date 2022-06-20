const cartas = ['bobrossparrot.gif', 
'bobrossparrot.gif', 
'explodyparrot.gif', 
'explodyparrot.gif',
'fiestaparrot.gif', 
'fiestaparrot.gif', 
'metalparrot.gif', 
'metalparrot.gif', 
'revertitparrot.gif',
'revertitparrot.gif',
'tripletsparrot.gif', 
'tripletsparrot.gif', 
'unicornparrot.gif',
'unicornparrot.gif'
];

let cartasSelecionadas = [];
let cartasEscolhidas = [];
let contadorCartasEncontradas = 0;

let numeroCartas;





function validarNumeroCartas(){
    
    numeroCartas= Number(prompt("Com quantas cartas deseja jogar?(4 à 14)"));
// condições de jogo:
//  precisa ser apenas numeros pares %2===0
// precisa ser sobre numeros 
// precisa ser numero maior que 4 e menor que 15
    if(numeroCartas < 4 || numeroCartas >15){
        alert("Esse modo não é permitido, tente novamente");
        validarNumeroCartas();

    }        
    if (numeroCartas%2 !== 0){
        alert("Só números pares por favor né, nem adianta botar letras...");
        validarNumeroCartas();
    }
    iniciarJogo();
    
}
validarNumeroCartas();


function iniciarJogo(){
    document.querySelector(".container-cartas").innerHTML = '';
    for (let i=0; i<numeroCartas; i++){
        cartasSelecionadas.push(cartas[i]);
    }

    cartasSelecionadas.sort(comparador);

    for(let index=0; index<numeroCartas; index++){
        const cartasTemplate= 
        `<div class="cartas" onclick="virarClick(this)">
            <div class="frente face">
            <img class="imagens" src="./imagem/front.png" alt="">
            </div>
            <div class="verso face">
            <img class="imagens" src= "./imagem/${cartasSelecionadas[index]} " alt="">
            </div>
        </div>`
        document.querySelector(".container-cartas").innerHTML+= cartasTemplate;   
    }
}


function finalizarJogo(){
    alert("duas palavras: PARA BÉNS!! - fim de jogo");
    cartasSelecionadas=[];
    contadorCartasEncontradas=0;
    validarNumeroCartas();

}

function desvirar(carta1, carta2){
    carta1.querySelector(".frente").classList.remove("virada");
    carta1.querySelector(".verso").classList.remove("desvirada");

    carta2.querySelector(".frente").classList.remove("virada");
    carta2.querySelector(".verso").classList.remove("desvirada");
}

function virarClick(elemento){
    /* verificar se o elemento possui virado
    se possuir, já tá virado, não faz nada
    se não possuir, executa o código que vira
    */
    const estaVirado = elemento.querySelector(".frente").classList.contains("virada");
    
    if(estaVirado === false) {

        elemento.querySelector(".frente").classList.add("virada");
        elemento.querySelector(".verso").classList.add("desvirada");

        cartasEscolhidas.push(elemento);

        if(cartasEscolhidas.length===2){
            console.log('if de duas cartas')
            if(cartasEscolhidas[0].innerHTML!== cartasEscolhidas[1].innerHTML){
                
                setTimeout(desvirar, 1000, cartasEscolhidas[0],cartasEscolhidas[1]);

                console.log('são diferentes')
                cartasEscolhidas=[];
            }
            else {
                contadorCartasEncontradas+=2;
                console.log('são iguais')
                cartasEscolhidas=[];
            
                if(contadorCartasEncontradas===numeroCartas){
                    setTimeout(finalizarJogo, 1000);
                }
            }
        } 
    }
    else{console.log("Ta querendo trapacear né?! Não adianta clicar em uma carta que já ta virada ")}
}

function comparador() { 
	return Math.random() - 0.5; 
}
