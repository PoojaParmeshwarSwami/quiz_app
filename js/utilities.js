import questionArray from './questionArray.js'

const totolbtn = document.querySelector("#totolbtn");
const activebtn = document.querySelector("#activebtn");
const buttons_container = document.querySelector(".buttons_container");
const qNo = document.querySelector("#qNo");
const qtn = document.querySelector("#qtn");

const options = document.querySelectorAll(".options")

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

  export function display(disp) {
    qtn.innerHTML = questionArray[disp].question;
    console.log(options)
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
  