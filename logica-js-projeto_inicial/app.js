alert ('Boas Vinda ao Jogo do Numero Secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log (numeroSecreto)
let chute;
let tentativas = 1;
// while = enquanto // enquanto o chute não for igual (!=) o numeroSecreto
// != Diferente de

while (chute != numeroSecreto) {
    chute = prompt (`Escolha um numero entre 1 e ${numeroMaximo}`);
    
     // If = Se - Se o chute for igual o numero secreto // break = parar
    if (chute == numeroSecreto) {
        break;
        
        //${} Template strings = associação de numero e palavras ou combinação.
    
        // else = senão
    } else {
        alert ('Voce Errou')
    }
    if (chute > numeroSecreto) {
        alert (`O numero secreto é menor que ${chute}`);
    } else {
        alert (`O numero secreto é maior que ${chute}`);
    }
    //tentativas = tentativas +1;
    tentativas++;
}

// : = senão (Operador Ternario)

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


//if (tentativas > 1) {
    //alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} //else {
   // alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}
