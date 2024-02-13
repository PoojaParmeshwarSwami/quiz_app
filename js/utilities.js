import questionArray from './questionArray.js'

const totolbtn = document.querySelector("#totolbtn");
const activebtn = document.querySelector("#activebtn");
const buttons_container = document.querySelector(".buttons_container");
const qNo = document.querySelector("#qNo");
const qtn = document.querySelector("#qtn");
const optionContainer = document.querySelector(".optionContainer")
const options = document.querySelectorAll(".options")
const nextbtn = document.querySelector("#nextbtn");
const prevbtn =document.querySelector("#prevbtn")
let questionNumber = 1
let totalbtn = 1

export function createbtn(val) {
  const btn = document.createElement("button");
  btn.innerHTML = val;
  totalbtn = Number(val)
  btn.addEventListener("click", function (e) {
    questionNumber = Number(val)
    activebtn.innerHTML = val;
    qNo.innerHTML = val;
    rest_opt_color()
    change_btn_color(e.target.innerHTML);
    display(e.target.innerHTML - 1);
  });
  buttons_container.appendChild(btn);
}

export function display(disp) {
  qtn.innerHTML = questionArray[disp].question;
  options.forEach((element, ind) => {
    element.innerHTML = questionArray[disp].option[ind]
  });
}

export function change_btn_color(arg) {
  let buttonList = buttons_container.children;
  for (let i = 0; i < buttonList.length; i++) {
    if (buttonList[i].innerHTML === arg) {
      buttonList[i].style.backgroundColor = "green";
    } else {
      buttonList[i].style.backgroundColor = "grey";
    }
  }
}
// <------ onClick option color change -------->

optionContainer.addEventListener("click", function (e) {
  // console.log(e.target.innerHTML)
  change_opt_color(e.target)
});


export function change_opt_color(opt) {
  let optionList = optionContainer.children;
  for (let i = 0; i < optionList.length; i++) {
    if (optionList[i].innerHTML === opt.innerHTML) {
      optionList[i].style.backgroundColor = "green";
    }
    else {
      optionList[i].style.backgroundColor = "white";
    }
  }
}


export function rest_opt_color(){
  let optionList = optionContainer.children;
  // console.log(optionList)
  for (let i = 0; i < optionList.length; i++) {
    optionList[i].style.backgroundColor = "white";
  }
}

nextbtn.addEventListener("click",()=>{
    
    if((questionNumber)<totalbtn){
      questionNumber+=1
    activebtn.innerHTML = questionNumber;
    qNo.innerHTML = questionNumber;
    rest_opt_color()
    change_btn_color(String(questionNumber));
    display(questionNumber - 1);
    }
    // else{
    //   change_btn_color("1")
    //   display(0)
    //   activebtn.innerHTML = "1";
    //   qNo.innerHTML = "1";
    // }
})

prevbtn.addEventListener("click",()=>{
  if(questionNumber>1){
    console.log(questionNumber)
  questionNumber-=1
  activebtn.innerHTML = questionNumber;
    qNo.innerHTML = questionNumber;
    rest_opt_color()
    change_btn_color(String(questionNumber));
    display(questionNumber - 1);
  }
  // else{
  //   change_btn_color("1")
  //     display(0)
  //     activebtn.innerHTML = "1";
  //     qNo.innerHTML = "1";

  // }

})



