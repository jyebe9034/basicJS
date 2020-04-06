// 객체 비교
var a = 100;
var b = 100;

var objA = { value: 100 };
var objB = { value: 100 };
var objC = objB;

console.log(a === b);
console.log(objA === objB); // 참조 값이 같아야 true
console.log(objB === objC);