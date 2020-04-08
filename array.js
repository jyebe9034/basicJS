const arr1 = ['zero', 'one', 'two']

// push() 메서드
arr1.push('three')
console.log(arr1)

// length 프로퍼티
arr1.length = 5
arr1.push('four')
console.log(arr1)

// Array와 Object의 유사점과 차이점
const fruitsArray = ['apple', 'banana', 'grapes']
console.log(fruitsArray[0])
console.log(fruitsArray[1])
console.log(fruitsArray[2])

const fruitsObj = {
  '0': 'apple',
  '1': 'banana',
  '2': 'grapes'
}
console.log(fruitsObj[0])
console.log(fruitsObj[1])
console.log(fruitsObj[2])

// typeof 연산자 비교
console.log(typeof fruitsArray) // object
console.log(typeof fruitsObj) // object

// length 프로퍼티 비교
console.log(fruitsArray.length) // 3
console.log(fruitsObj.length) // undefined

// 배열 표준 메서드
fruitsArray.push('orange')
console.log(fruitsArray) // [ 'apple', 'banana', 'grapes', 'orange' ]
// fruitsObj.push('orange')
// console.log(fruitsObj) // TypeError: fruitsObj.push is not a function

// 배열의 프로퍼티 동적 생성
const arr2 = ['zero', 'one', 'two']
console.log(arr2.length)

arr2.color = 'blue'
arr2.name = 'number_array'
console.dir(arr2)
console.log(arr2.length)

arr2[3] = 'three'
console.log(arr2.length)

console.dir(arr2)

// 배열의 프로퍼티 열거
for (var prop in arr2) {
  console.log(prop, arr2[prop])
}

for (var i = 0; i < arr2.length; i++) {
  console.log(i, arr2[i])
}

// 배열 요소 삭제 delete()나 splice(start: 시작 인덱스, deleteCount: 삭제할 개수, item: 삭제된 자리에 추가할 정보)
arr2.splice(2,1)
console.log(arr2)
console.log(arr2.length)

