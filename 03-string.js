// string
const s1 = "Modern JavaScript and Java";
const s2 = String("Modern JavaScript");
console.log(typeof s1, typeof s2);

// Property: .length
console.log(s1, "length=", s1.length);

// 문자열 추출 method
console.log(s1.charAt(7));

// 문자열은 그 자체로 배열처럼 사용 가능
console.log(s1[7]);

// 문자열 추출 method
console.log(s1.charAt(7)); // 7번 index의 문자
console.log(s1[7]); // 문자열 그자체로 배열
console.log(s1.substr(7, 10 )); // 7번 index 부터 10글자
console.log(s1.substr(7)); // 7번 index 부터 끝까지 
console.log(s1.substring(7, 17)); // 7 번 ~ 17번
console.log(s1.substring(7)); // 7번 부터 끝까지

// 검색 method
let position = s1.indexOf("Java");
console.log("1번째 Java의 index : ", position);
position = s1.indexOf("Java", position + 1); // 검색 범위 제한
console.log("2번째 Java의 index", position);
position = s1.indexOf("Java", position +1);
console.log("3번쨰 Java의 index", position);

// 문자열 치환
console.log(s1.replace("JavaScript", "JS"));
console.log("원본:", s1); // 원본 변경은 아님

// 좌우 화이트 스페이스 제거
console.log("            Javascript            ".trim());

// 이스케이프 문자 -> 주의
//  \n : 개행, \t : tab 문자, \' : quoto, \" :double quoto
//  \` : backtick(ES6) 문자, \$ : (ES6)

let temp = 24;
// 현재 온도는 temp 도입니다. 
let message = "현재 온도는 " +  temp + "도입니다.";
console.log(message);

// template 문자열(ES6)
// backtick ` and $로 손쉽게 문자열 formatting 가능
message = `현재 온도는 ${temp}도입니다.`;
console.log(message);

// 여러 줄 문자열 생성에도 편리
message = "예전에는 여러줄 문자열을 \n 만드는게 \n 쉽지 않았습니다."
console.log(message);
message = `하지만 ES6에서는
아주쉽게
여러 줄 문자열을 만들 수 있습ㄴ디ㅏ.`;
console.log(message);