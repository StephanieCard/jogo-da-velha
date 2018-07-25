const tabuleiro = document.querySelectorAll('.casa');
let mensagemvenceu = document.querySelector('.venceu');
let mensagemvelha = document.querySelector('.velha');
let contador = 0; 


function clicar() {
    contador++;
   if(contador % 2){
    this.querySelector('p').innerHTML = "X";  
   } else{
    this.querySelector('p').innerHTML = "O";
   }
   this.onclick= null;

   if(contador >= 5){
       verificar();
   }
}

for(casa in tabuleiro) {
    tabuleiro[casa].onclick = clicar;
}

function comparar(casa1, casa2, casa3){
    if(casa1.innerHTML === casa2.innerHTML && casa2.innerHTML == casa3.innerHTML && casa1.innerHTML !== ""){
        return true;
    } else{
        return false;
    }
}

function verificar(){
    if(comparar(tabuleiro[0].querySelector('p'), tabuleiro[1].querySelector('p'), tabuleiro[2].querySelector('p')) || 
    (tabuleiro[3].querySelector('p'), tabuleiro[4].querySelector('p'), tabuleiro[5].querySelector('p')) || 
    (tabuleiro[6].querySelector('p'), tabuleiro[7].querySelector('p'), tabuleiro[8].querySelector('p')) || 
    (tabuleiro[0].querySelector('p'), tabuleiro[3].querySelector('p'), tabuleiro[6].querySelector('p')) || 
    (tabuleiro[1].querySelector('p'), tabuleiro[4].querySelector('p'), tabuleiro[7].querySelector('p')) || 
    (tabuleiro[2].querySelector('p'), tabuleiro[5].querySelector('p'), tabuleiro[8].querySelector('p')) || 
    (tabuleiro[0].querySelector('p'), tabuleiro[4].querySelector('p'), tabuleiro[8].querySelector('p')) ||
    (tabuleiro[2].querySelector('p'), tabuleiro[4].querySelector('p'), tabuleiro[6].querySelector('p'))){
        mensagemvenceu.classList.add('aparecervenceu');
    } 
        mensagemvelha.classList.add('aparecervelha');
}

