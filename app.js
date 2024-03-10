alert("46-masala");
(function () {
  console.log("46-masala");
})();
let arr = ["name", 6, "age", "water"];
let del = +prompt("Nechta elementni o'chirmoqchisiz");
let gap = [];
function tallak(arr, del) {
  if (del == 1) {
    console.log(arr.slice(1, 5));
  } else if (del == 2) {
    console.log(arr.slice(2, 5));
  } else if (del == 3) {
    console.log(arr.slice(3, 5));
  } else if (del == 0) {
    console.log(arr);
  } else {
    console.log((arr = gap));
  }
}
console.log(tallak(arr, del));
//
alert("48-masala");
(function () {
  console.log("48-masala");
})();
let son = +prompt("Raqam kiriting");
function negative(num) {
  let result = "-" + num;
  return result;
}
console.log(negative(son));
//
alert("49-masala");
(function () {
  console.log("49-masala");
})();
let array = [1, 2, 3, 4, 5];
function almash(arr) {
  return arr.reverse();
}
console.log(almash(array)); // [5, 4, 3, 2, 1]
//

alert("56-masala");
(function () {
  console.log("56-masala");
})();
let arrayw = ["name", 6, "age", "water"];
function lastel(arr) {
  return arr[arr.length - 1];
}
console.log(lastel(arrayw));
//
alert("62-masala");
(function () {
  console.log("62-masala");
})();
let ar = ["name", 6, "age", "water"];
function arraytostring(arr) {
  return arr.join("");
}
console.log(arraytostring(ar));
//
alert("63-masala");
(function () {
  console.log("63-masala");
})();
let m1 = [1, 2, 3];
let m2 = [4, 5, 6];

let tm = birlash(m1, m2);
function birlash(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(tm); // [1, 2, 3, 4, 5, 6]
