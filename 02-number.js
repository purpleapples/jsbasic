// 수치형 자료형
// 산술 연산 가능
let n1 = 5;
let n2 = Number(5);
console.log(n1, "==", n2, "?", n1 ==n2);
console.log(typeof n1, typeof n2)

// 다양한 수치 데이터의 입력
const hex = 0xFF0000; // 16진수
const oct = 0o10; // 8진수
console.log(hex, oct);

// Math 객체의 활용
console.log("PI:" , Math.PI);
console.log("파이를 반올림하면?", Math.round(Math.PI));
console.log("반올림, 버림:", Math.round(3.567, Math.trunc(3.567)) );
console.log("최댓값, 최솟값",Math.max(1, 5, 3, 2, 6, 7), Math.min(1, 5, 3, 2, 6, 7));

// Casting : 데이터 형변환에 활용
// parse 꼐열 내장 함수: parseInt, parseFloat
console.log(typeof parseInt("011")); // 문자열 011 -> Number 로 
console.log(parseInt("011", 2)) // 2진수 011 -> Number
console.log(parseInt("123.456")); // 정수부만 변환
console.log(parseFloat("123.456")); // 실수 전체 변환

// 수치형태가 아닌 문자열의 변환 -> NaN (Not a Number)
console.log("a123 -> int:", parseInt("a123"));
let v  = parseInt("a122");

console.log(v," is ", typeof v);
// 수치변수가 NaN인지 확인 isNaN 함수
console.log("v is NaN?", isNaN(v));
// NaN가 포함된 산술 계산식은 NaN
console.log("NaN 포함 산술 계산:", v+10);

// Infinity
console.log("1/0 = ", 1/0)
// 유한수의 확인은 isFinite 함수를 사용
console.log("1/0 is Finite?", isFinite(1/0));
console.log("2020 is Finite?", isFinite(2020));
console.log("NaN is Finite?", isFinite(v));
// Infinity가 포함된 산술 계산식은 Infinity
let result = 1/0 + 10;
console.log(result, " is ", typeof result);