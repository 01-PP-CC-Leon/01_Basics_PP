// let testArr
// arr = ["Ich", "bin","der", "Leon"];
// console.log(arr[3]);

// console.log("---------------------------------")

var struc =
{
 level1:
 {
 level2:
 {
param1: 3.14,
param2: 10.01
 }
 }
}
const { param1, param2 } = struc.level1.level2;
console.log(param1); // Gibt 3.14 aus
console.log(param2); // Gibt 10.01 aus


