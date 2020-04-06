var foo = {
  name: 'foo',
  age: 30,
  major: 'computer science',
  nickname: 'hello'
};

// delete 연산자를 통해 객체의 프로퍼티를 삭제하는 것은 가능하지만 객체 자체를 삭제하는 건 불가능
console.log(foo.nickname);
delete foo.nickname;
console.log(foo.nickname);

delete foo;
console.log(foo);

var prop;
for (prop in foo) { // for in을 사용하면 객체의 모든 프로퍼티를 출력할 수 있음
  console.log(prop, foo[prop]);
}