// 이 시점에는 아직 add()가 정의되지 않았음에도 add()를 호출하는 것이 가능하다. 
// 왜냐면 함수는 자신이 위치한 자리에 상관없이 함수 선언문 형태로 정의한 함수의 유효범위가 코드의 맨 처음부터 시작한다는 것을 알 수 있다.
// 이것을 '함수 호이스팅'이라고 한다.

// 1. 함수 선언문 방식과 함수 호이스팅
console.log(add(2, 3)) // 5


function add(x, y) {
  return x + y
}

console.log(add(3, 4)) // 7

// 2. 함수 표현식 방식과 함수 호이스팅
console.log(sum(2, 3))  // uncaught type error


const sum = function (x, y) {
  return x + y
}

console.log(sum(3, 4)) // 7

// 함수 호이스팅이 발생하는 원인은 자바스크립트의 변수 생성과 초기화의 작업이 분리되서 진행되기 때문이다.