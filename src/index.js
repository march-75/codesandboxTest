/**
 * スプレット構文
 */

// const arr1 = [1, 2, 3, 4, 5, 6];

// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2, num3, num4) =>
//   console.log(`合計は${num1 + num2 + num3}`);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる場合

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20, 30, 40, 50];
// const arr6 = [...arr2];
// console.log(arr6);
// const arr7 = [...arr2, ...arr4];
// console.log(arr7);

/**
 * mapやfilterを使った処理
 */

const nameArr = ["田中", "山田", "ごんたろう", "げんごろう", "ぷんじろう"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   //console.log(`順番に,${name}`);
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, i) => console.log(`${i + 1}番目は${name}`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "田中" || name === "山田") {
//     return `${name}さん`;
//   } else {
//     return `${name}どん`;
//   }
// });
// console.log(newNameArr);

// const num1 = 3;
// const val1 = num1 > 0 ? "trueだす" : "falseだす";
// console.log(val1);

// const num = "1500";
// // console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100超え" : "OK!";
};
console.log(checkSum(50, 20));

// ||は左側がfalseなら右側を返すって意味
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// &&は左側がtrueなら右側を返すって意味
const num2 = 3;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
