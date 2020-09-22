// Boolean : logical type true or false
// compare//logical operation result
// combination of logic : AND(&&), OR(||), NOT(!) 을 조합하여 논리값 추출
let v1; // 선언 이후 초기화 안하여 Engine에서 undefined 로 값 정해놓음
let v2 = null; // 선언이후 null 로 초기화
console.log(typeof v1, typeof v2);

// 개발자가 임의로 undefined로 설정 가능
v2 = undefined;
console.log(v2, typeof v2,
    v2 === undefined);

// == : 값만 비교
// === : type 과 값 같이 비교
console.log(123 =="123");
console.log(123 ==="123");

//Boolean type function 으로 논리값 반환
console.log(Boolean("string"), Boolean(""));
console.log(Boolean(2020), Boolean(0));