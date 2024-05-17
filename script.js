let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);  
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);  
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    //random button choose
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr level:",level);
    // let idx=level-1;
    if(userSeq[idx]==gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length==gameSeq.length){
            //means last index hai
            setTimeout(levelUp,1150);

            // levelUp();
        }
    }else{
        h2.innerHTML=`Game Over! <b>Your score was ${level}</b>. <br> Press any key to start`;
        let bod=document.querySelector("body");
        adi(bod);
        reset();
    }
}

function btnPress(){
    // console.log("btn was pressed");
    console.log(this);
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    //this wahi button hoga jise hum ne press kia hai.
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");

for(i of allBtns){
    i.addEventListener("click",btnPress);
}

function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

function adi(bod){
    // let bod=document.querySelector("body");
    bod.classList.add("dark_red");
    setTimeout(function(){
        bod.classList.remove("dark_red");
    },250)
}