
//задача 1
function show() {
  let st = document.getElementById('in').value;
  let st1 ='';
  for (let i = 0; i< st.length; i++){
    st1 +=  st[i].charCodeAt(0) + " ";
  }
  document.getElementById('out').innerHTML = st1;
}


///////////////////////////
// Задача 2 код не мой. Я не понял условие
// function unicSubstring(str) {
//     let longest = 0;
//     let currentSubstr = '';
//     for(let letter of str) {
//         if(! currentSubstr.includes(letter)) {
//             currentSubstr += letter;
//             longest = Math.max(currentSubstr.length, longest);
//         } else {
//             for(let i = 0; i < currentSubstr.length; i ++) {
//                 if(currentSubstr.charAt(i) === letter) {
//                     currentSubstr.slice(i + 1);
//                 }
//             }
//         }
//     }
// return longest;
// }
//
// console.log(` Serg ${unicSubstring('aaaaabasd')}`);

//////////////////////

//Задача 3


let table = document.getElementById("garden");
let mygarden = [];
function readTab() {
  let e =0;
  for ( let i=1; i < table.rows.length; i++){
    for (let j=0; j< table.rows[0].cells.length; j++){
      mygarden[e] = table.rows[i].cells[j].innerHTML;
      e++;
    }
  }
}
readTab();

mygarden.sort();

function writeA() {
  for (let i=0 ,c=0; i < mygarden.length ; c++){
      for (let r=1;r < table.rows.length; r++, i++){
        table.rows[r].cells[c].innerHTML = mygarden[i];
      }
  }
};


function writeYA() {
  for (let i=mygarden.length -1 ,c=0; i >= 0; c++){
      for (let r=1;r < table.rows.length; r++, i--){
        table.rows[r].cells[c].innerHTML = mygarden[i];
      }
  }
};









//
