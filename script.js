let btns=document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
const winPattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let turnx=true;
const resetGame=()=>{
    turnx=true;
    enabledBtn();
    msgContainer.classList.add("hide");
    for(let btn of btns){
        btn.innerText="";
    }
};

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(turnx){
            btn.innerText="X";
            turnx=false;
        }else{
            btn.innerText="O";
            turnx=true;
        }
        btn.disabled=true;
        checkWinner();
    });
});
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBtn();
};
const disabledBtn=()=>{
    for(let btn of btns){
        btn.disabled=true;
    }
}
const enabledBtn=()=>{
    for(let btn of btns){
        btn.disabled=false;
    }
}
const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1= btns[pattern[0]].innerText;
        let pos2= btns[pattern[1]].innerText;
        let pos3= btns[pattern[2]].innerText;
        // console.log(pos1,pos2,pos3);
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
            }
        }
    }
};
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);