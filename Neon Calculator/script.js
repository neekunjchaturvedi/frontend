// // let el = document.querySelectorAll("h1");
// const str = "Hey js you r amazing";
// const vowels = ["a", "e", "i", "o", "u"];

// function countvowels(data) {
//   let count = 0;
//   let str2 = str.toLowerCase().split("");
//   for (let i = 0; i < str2.length; i++) {
//     for (let val of vowels) {
//       if (val == str2[i]) {
//         count++;
//         break;
//       } else {
//         continue;
//       }
//     }
//   }
//   return count;
// }
// console.log(countvowels(str));
// let btn = document.createElement("button");
// btn.innerText = "Hello world";
// btn.style.cssText = "background-color:red; color:white; margin:40px;";
// document.querySelector("body").prepend(btn);

// let head = document.createElement("h1");
// head.innerText = "Hey how u doing";
// head.style.cssText = "color:aquamarine; background-color:black; margin:40px;";

// btn.onclick = () => {
//   document.querySelector("body").append(head);
// };
let sol = document.querySelector(".solution");

btn1 = document.querySelector(".btn1");
btn1.onclick = () => {
  let a = Number(document.querySelector(".no1").value);
  let b = Number(document.querySelector(".no2").value);
  c = a + b;
  sol.innerText = "The solution is ";
  sol.append(c);
};
btn2 = document.querySelector(".btn2");
btn2.onclick = () => {
  let a = Number(document.querySelector(".no1").value);
  let b = Number(document.querySelector(".no2").value);
  c = Math.abs(a - b);
  sol.innerText = "The solution is ";
  sol.append(c);
};
btn3 = document.querySelector(".btn3");
btn3.onclick = () => {
  let a = Number(document.querySelector(".no1").value);
  let b = Number(document.querySelector(".no2").value);
  c = a * b;
  sol.innerText = "The solution is ";
  sol.append(c);
};
btn4 = document.querySelector(".btn4");
btn4.onclick = () => {
  let a = Number(document.querySelector(".no1").value);
  let b = Number(document.querySelector(".no2").value);
  if (b == 0) {
    c = "undefined";
    sol.innerText = "The solution is ";
    sol.append(c);
  }
  c = a / b;
  sol.innerText = "The solution is ";
  sol.append(c);
};
btn5 = document.querySelector(".btn5");
btn5.onclick = () => {
  let a = Number(document.querySelector(".no1").value);
  let b = Number(document.querySelector(".no2").value);
  c = a ** b;
  sol.innerText = "The solution is ";
  sol.append(c);
};
let a = document.querySelector(".mode");
curr = "dark";
a.addEventListener("click", () => {
  if (curr == "dark") {
    curr = "light";
    document.querySelector("body").style.backgroundColor = "white";
  } else {
    curr = "dark";
    document.querySelector("body").style.backgroundColor = "black";
  }
});
