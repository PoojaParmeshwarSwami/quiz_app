import questionArray from './questionArray.js'

const totolbtn = document.querySelector("#totolbtn");
const activebtn = document.querySelector("#activebtn");
const buttons_container = document.querySelector(".buttons_container");
const qNo = document.querySelector("#qNo");
const qtn = document.querySelector("#qtn");
const optionContainer =document.querySelector(".optionContainer")
const options = document.querySelectorAll(".options")
const nextbtn = document.querySelector("#nextbtn");

export function createbtn(val) {
 
    const btn = document.createElement("button");
    btn.innerHTML = val;

     btn.addEventListener("click", function (e) {
      activebtn.innerHTML = val;
      qNo.innerHTML = val;
      change_btn_color(e.target.innerHTML);
      display(e.target.innerHTML - 1);
    });
    buttons_container.appendChild(btn);
  }
 
//  <------nextButton--->
  //   nextbtn.addEventListener("click",function(e){
  //     change_btn_color(e.target.innerHTML);
      // display(e.target.innerHTML - 1);
  // })
  




  
  export function display(disp) {
    qtn.innerHTML = questionArray[disp].question;
    // console.log(options)
    options.forEach((element,ind) => {
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

  optionContainer.addEventListener("click",function(e){
    change_opt_color(e.target)
    });

  
 export function change_opt_color(opt){

  let optionList = optionContainer.children;
  
  for(let i=0;i< optionList.length;i++){
    
    if(optionList[i]===opt){
      optionList[i].style.backgroundColor = "green";
    }
    else {
      optionList[i].style.backgroundColor = "white";
    }
  }
 }





  
  