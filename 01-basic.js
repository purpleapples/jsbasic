// 콘솔 출력을 console 내장 객체의 메서드를 이용
console.info("정보메시지");
console.log("일반 로그");
console.warn("경고 메시지");
console.error("에러 메시지");

// 필요한 출력 객체를, 구분하여 출력
console.log("ECMA Script", 2015);

// 변수
// var, let, const

var testVar = 10; // ES6 이전에 변수 할당하는 방법
// WEB 환경에서 var를 사용하도록 하자

let testLet = "let variable"; //재할당 가능 변수
const TEST_CONST ="constant"; // 상수

console.log(testVar,testLet, TEST_CONST);

testVar = "var changed";
testLet = "let changed";
// TEST_CONST = "constant changed"; -> 재할당 불가, 선언과 동시에 할당 필요

// typeof : 동적 타이핑 언어 -> 실제 객체의 타입을 확인해야 한다.
let v = "JavaScript";
console.log("v ->" ,v, "type ->", typeof(v));
v = 2020;
console.log("v ->" ,v, "type ->", typeof(v));

// 변수 초기값 : undefined
// 변수 범위 : let : {}, var : 전역
// 변수 hoisting : 나중에 선언된 변수 를 참조하는 것 그러나 값은 변하지 않는다.

//6가지 원시형 데이터
// Boolean, null, undefined, Number, String, Symbol, Object

// literal : script에 부여한 고정값으로 변수는 아니다.
// 배열, boolean, 부동소수점, 정수, 객체, 정규식, 문자열
 var coffees = ["french Roast", "Colombian", "Kona"];
 // 배열 literal 은 일종의 객체 initializer이다.
 // 배열의 추가 쉼표: 요소사이에 undefined을 집어넣는다. 
 // 후행 쉼표도 같은 역할이나 구버전에서 오류발생 가능하다.

 var fish = ["Lion", , "Angel"];

 // boolearn literal : 객체의 값과 primitivie value를 헷갈리면 안된다.
 // 객체 literal : {} 안에 작성된 Key:value 목록

 // 정규식 literal :  /정규식패턴/ 
 // null 과 undefined : null은 명시적 빈값 할당 

 // 구조분해 : 배열이나 객체의 구조를 반영하여 배열이나 객체에서 데이터를 
 //           데이터를 추출
var foo = ['one', 'two', 'three'];

var one = foo[0];
var two = foo[1];
var three = foo[2];

var [one, two] = foo;

// 삼항연산자  조건 ? true : false
// for문 특징 : 조건대상에 여러 변수를 넣을 수 있다. 
// delete 객체, 객체의 속성, 객체의 특정위치의 요소를 삭제 가능
delete foo[2];
delete foo;
// delete 성공시 undefined로 설정한다. delete 연산이 가능할 경우 true 반환


// fucntion : function 으로 전달된 모든 params는
//            함수 내부에서 arguments객체에 저장

// 1급 객체 : 모든 것을 parameter로 전달 가능

// typeof : method와 function 는 function 을 반환
//          정해진 객체는 object 또는 function 반환

// void : void 연산자는 void(식), void 식 으로 사용가능하며
//        값의 반환을 막는데 사용한다.
//         hyperlink 에서 사용가능하다. 
// <a href="javscript:void(document.form.submit())">asa</a>

// in 배열에 요소 확인하고 있으면 true 반환
// instanceof 객체 type 비교

// 중요한 표현식
// this: 현재 객체 참조, 배열인 경우도 존재
// 실제로 사용시에 태그에서 this를 전달해 주면 form 요소 전달 가능

// new : 새로운 instantiation 
// super : 개체의 부모에 함수를 호출하는 데 사용

// 확산 연산자 : 다중 인수 호출 또는 다중 요소들이 예상되는 곳에서 확장
//              될 수 있는 표현을 하게 한다.

var parts = ["shoulder", "knees"];
var lyrics = ['head', ...parts, 'and', 'toes'];
// 아래와 같이 unpacking도 가능하다.
function f(x, y, z){}
var args = [0,1,2];
f(...args);

