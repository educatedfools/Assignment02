/* function flippyTheCoin(){
    let coinFlip = Math.round(Math.random());
    let choice = prompt('Heads or Tails');
    choice = choice.toLowerCase();
    if(choice != 'heads' && choice != 'tails'){ //guard clause
        document.write('You blew it!');
        return false;
    }
    if(choice == 'heads'){
        if(coinFlip === 1){
            document.write('The flip was heads and you chose heads...you win!');
            return;
        }
        else{
            document.write('The flip was tails but you chose heads...you lose!');
            return;
        }
    }
    if(choice == 'tails'){
        if(coinFlip === 0){
            document.write('The flip was tails and you chose tails...you win!');
            return;
        }
        else{
            document.write('The flip was heads but you chose tails...you lose!');
            return;
        }
    }
}
flippyTheCoin(); */