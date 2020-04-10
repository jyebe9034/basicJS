// JS에서는 함수도 객체다.
// 함수 자체가 일반 객체처럼 프로퍼티를 가질 수 있다는 뜻
function add(x, y) {
  return x+y
}

add.result = add(3,2)
add.status = 'OK'

console.log(add.result) // 5
console.log(add.status) // OK

// 변수나 프로퍼티의 값으로 함수 할당
const foo = 100
const bar = function() { return 100 } 
console.log(bar()) // 100

// 프로퍼티에 함수 할당
let obj = {}
obj.baz = function() { return 200 }
console.log(obj.baz()) // 

// 함수 인자로 전달
const param = function(func) {
  func()
}

// param() 함수를 호출할 때, 리터럴 방식으로 생성한 익명함수를 func 인자로 넘김. 
param(function() {
  console.log('Function can be used as the argument!')
})

// 리턴값으로 활용
let result = function() {
  return function() {
    console.log('this function si the return value!')
  }
}

let print = result()
print()

// 함수 객체의 기본 프로퍼티(chrome에서 실행해야 보임.)
function all(x, y) {
  return x + y
}

console.dir(all)
