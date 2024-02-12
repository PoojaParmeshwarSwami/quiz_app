import questionArray from './questionArray.js'
import {createbtn,display,change_btn_color} from "./utilities.js"



totolbtn.innerHTML = questionArray.length;

for (let index = 0; index < questionArray.length; index++) {
  createbtn(index + 1);
}
change_btn_color("1")
display(0)

console.log("Hello just nigaletch");
