let gamesqnc = [];
let usersqnc = [];

let start = false;
let level = 0;

let btns = ["yellow","green", "red", "purple"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(start == false){
      console.log("game started")
      start = true;

      levelup();
    }
   
})

function btnflash(btn){
  btn.classList.add("flash")
  setTimeout(function(){
    btn.classList.remove("flash");
  },250);
}

function levelup(){
  usersqnc = [];
  level++;
  h2.innerText = `level${level}`;
  
  let randindx = Math.floor(Math.random()*3);
  let randclr = btns[randindx];
  let randbtn = document.querySelector(`.${randclr}`)
  gamesqnc.push(randclr);
  console.log(gamesqnc);
  btnflash(randbtn);
}

function currAns(inx){

  if(usersqnc[inx] === gamesqnc[inx]){
    if(usersqnc.length == gamesqnc.length){
      setTimeout(levelup,1000);
    }
  }else{
    h2.innerHTML = `rehne de bhai nhi hoga tujhse<br>tera score <b>${level}</b> <span>🥳🥳🥳</span><br>firse khelega to koi bhi key daba`
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white";
    },200);
    reset();
  }
}

function btnpress(){
  let btn = this;
  btnflash(btn)

  usercolor = btn.getAttribute("id");
  usersqnc.push(usercolor);

  currAns(usersqnc.length-1);
} 

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
  btn.addEventListener("click", btnpress);
}


function reset(){
  start = false;
  gamesqnc=[];
  usersqnc=[];
  level = 0;
}