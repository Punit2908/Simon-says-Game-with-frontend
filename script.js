let title = document.querySelector('h2');
let randSeq = [];
let userSeq = [];
let level = 0;
let start = false;
let btn = ['red','blue','green','yellow'];
let highestScore = 0;
let h3 = document.querySelector('h3');

document.addEventListener("keypress",function (){
    if(start === false){
        start = true;

        levelUp();
    }
    
});
document.addEventListener("click",function (){
    if(start === false){
        start = true;

        levelUp();
    }
    
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },350);
};

function levelUp(){
    userSeq = [];
    level++;
    title.innerText = `Level ${level}`;
    if(highestScore<level){
        highestScore = level;
    }

    let random = Math.floor(Math.random() *4);
    let randcolor = btn[random];
    let randbtn = document.querySelector(`.${randcolor}`);
    randSeq.push(randcolor);
    console.log(randbtn);
    h3.innerText = `Highest Score: ${highestScore}`;
    btnFlash(randbtn);
}

function checkAns(idx){
    if(userSeq[idx]===randSeq[idx]){
        if(userSeq.length === randSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        title.innerHTML = `You Lose at level ${level}. Press any key to start again..`;
        document.body.classList.add('lose');
        setTimeout(function (){
            document.body.classList.remove('lose');
        }, 500);
        reset();
    }
}


function btnPress(){
    console.log(this);
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    checkAns(userSeq.length -1);
}

let allbtns = document.querySelectorAll('.btn');
for(btns of allbtns){
    btns.addEventListener('click',btnPress);
}

function reset(){
    userSeq = [];
    randSeq = [];
    start = false;
    level = 0;
}