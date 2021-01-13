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
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

const nameArr2 = nameArr.map((name) => {
  console.log(`順番に,${name}`);
  return name;
});
console.log(nameArr2);
