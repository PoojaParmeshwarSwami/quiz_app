import questionArray from './questionArray.js'
import {createbtn,display,change_btn_color,change_opt_color,ansArray} from "./utilities.js"



totolbtn.innerHTML = questionArray.length;
for (let index = 0; index < questionArray.length; index++) {
  createbtn(index + 1);
  ansArray[index]= -1;
}
  change_btn_color("1")
  display(0)
  activebtn.innerHTML = "1";
  qNo.innerHTML = "1";



// for(let i=0;i<questionArray.length;i++){
//   ansArray[i]= -1;
// }
console.log(ansArray)



