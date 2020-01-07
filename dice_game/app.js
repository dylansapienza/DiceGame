var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//document.querySelector('#current-' + activePlayer).textContent = dice;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

function endTurn(scorePass){
    scores[activePlayer] = parseInt(scores[activePlayer]) + parseInt(scorePass);
    
    document.querySelector('#score-' + activePlayer).textContent = parseInt(scores[activePlayer]);
    document.querySelector('#current-' + activePlayer).textContent = 0;

    if(activePlayer == 0){
    
        activePlayer = 1;
    
    }else{
    
        activePlayer = 0;
    
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

document.querySelector('.btn-roll').addEventListener('click', async function(){

    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';

    for(var i = 0; i <= 3; i++){

        for(var j = 1; j <= 6; j++){
        
            diceDOM.src = "dice-" + j + '.png';
            await sleep(50);
        }
    }

    
    //diceDOM.style.display = 'block';
    diceDOM.src = "dice-" + dice + '.png';

    var currentScore = document.querySelector('#current-' + activePlayer).textContent;
    currentScore = parseInt(currentScore);

    if(dice != 1){
        document.querySelector('#current-' + activePlayer).textContent = currentScore + dice;
    }
    else{
        currentScore = 0;
        document.querySelector('#current-' + activePlayer).textContent = currentScore;
        endTurn(currentScore);
    }

});

document.querySelector('.btn-hold').addEventListener('click', function(){

    var currentScore = document.querySelector('#current-' + activePlayer).textContent;

    endTurn(currentScore);

});










