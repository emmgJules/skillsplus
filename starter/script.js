var scores,roundup,activePlayer,dice,state;
function init(){
    state=true;
scores=[0,0];
roundup=0;
activePlayer=0;
document.getElementById('score--0').textContent='0';
document.getElementById('current--0').textContent='0';
document.getElementById('score--0').textContent='0';
document.getElementById('score--1').textContent='0';
document.getElementById('name--0').textContent='Player 1';
document.getElementById('name--1').textContent='Player 2';
document.querySelector('.player--0').classList.remove('player--winner');
document.querySelector('.player--1').classList.remove('player--winner');
document.querySelector('.player--1').classList.remove('player--active');
document.querySelector('.player--0').classList.add('player--active');
dice=document.querySelector('.dice');
dice.style.display='none';
}
init();
document.querySelector('.btn--roll').addEventListener('click',function(){
    if(state){
        var randomnumber=Math.floor((Math.random()*6)+1);
        dice.style.display='block';
        dice.src='dice-'+randomnumber+'.png';
        if(randomnumber!==1){

            roundup +=randomnumber;
            document.getElementById('current--'+activePlayer).textContent=roundup;
        }else{
            roundup=0;
            document.querySelector('.player--0').classList.toggle('player--active');
            document.querySelector('.player--1').classList.toggle('player--active');
            document.getElementById('current--1').textContent='0';
            document.getElementById('current--0').textContent='0';
            activePlayer===0?activePlayer=1:activePlayer=0;
               
            
        }

    }

    
});
document.querySelector('.btn--hold').addEventListener('click',function(){
    if(state){
        scores[activePlayer]+=roundup;
        document.getElementById('score--'+activePlayer).textContent=scores[activePlayer];
        if(scores[activePlayer]>=100){
            document.querySelector('.player--'+activePlayer).classList.add('player--winner');
            state=false;
           
            
        }
        
        roundup=0;
        activePlayer===0?activePlayer=1:activePlayer=0;
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
        document.getElementById('current--1').textContent='0';
        document.getElementById('current--0').textContent='0';
        dice.style.display='none';

    }



});
document.querySelector('.btn--new').addEventListener('click',init);
   

