// 익명함수
const add = function (x, y) {
  return x + y
}

// 함수 변수 add는 함수의 참조값을 가지므로 plus에도 그 값을 그대로 할당할 수 있음
const plus = add

console.log(add(3,4))
console.log(plus(5,6))

// 기명함수
const name = function sum(x, y) {
  return x + y
}; // 함수 표현식 방식의 경우엔 세미콜론을 붙이는 것을 권장함.

console.log(name(3,4))
console.log(sum(3,4)) // error가 발생함. 왜냐면 함수 표현식에서 사용된 함수 이름은 외부코드에서 접근할 수 없기 때문