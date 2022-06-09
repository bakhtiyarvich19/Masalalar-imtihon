// // 1-MASALA
// let arr = [];
// let a = Number(prompt("Raqam kiriting:")),
//     b = Number(prompt("Raqam kiriting:")),
//     c = Number(prompt("Raqam kiriting:"));

// arr.push(a,b,c);

// function sum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum === NaN ? "son emas" : sum;
// }

// console.log(sum(arr));

// ---------------------------------------------------------

// // 2-MASALA

// let arr = ["Jazz", "Blues"];
// console.log(arr);
// arr.push("Rock-n-roll");
// console.log(arr);
// arr[Math.ceil(arr.length / 2)-1] = "Classic";
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift("Rap", "Reggae");
// console.log(arr);

// // 3-MASALA
// let summa = 0;
// let salaries = {
//     "Akmal": 1200,
//     "Salim": 5200,
//     "Karima": 1800
// };
// function sumSalaries(salaries){

//     for(let sum of Object.values(salaries)){

//     summa += sum;
//     };

//     return summa
// }
// console.log(sumSalaries(salaries));

// -----------------------------------------------------------
// // 4-MASALA

// function oddAndEvenArray(array) {
//   let odd = 0;
//   let even = 0;
//   if (array == null) {
//     return [];
//   }
//   if (array.length == 0) {
//     return [];
//   } else if (array.length > 0) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] % 2 == 0) {
//         even = even + array[i];
//       } else if (array[i] % 2 == 1) {
//         odd = odd + array[i];
//       }
//     }
//   } else {
//     return "somthing error!";
//   }
//   return [even, odd];
// }

// console.log(oddAndEvenArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// -----------------------------------------------------------
// // 5-MASALA
// function findMissedNumbers(arr){
//     let min = arr[0]
//     let max = arr[arr.length-1]
//     let result = []
//     for(let i = min; i<=max;i++){
//         if(!arr.includes(i)){
//             result.push(i)
//         }
//     }
// return result
// }

// console.log(findMissedNumbers([-3,-2,1,5]));
