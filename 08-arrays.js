// 배열의 생성: 객체 이용 생성
const a1 = new Array(10); // 10개짜리 빈 배열
const a2 = new Array(); // 빈 배열
const a3 = new Array(1, "ABC", true) // 형식을 가리지 않는다.

console.log(a1.length, a2.length, a3.length);

//literal 생성 : [] -> 추천
const a4 = []; 
const a5 = ["red","green","blue"];

console.log(typeof a4, typeof a5);

// 객체도 배열처럼 접근할 수 있다.

const person = {
    name:"홍길동",
    job:"도적",
};
console.log(person['name'], person['job']);

// javascript 의 배열은 index를 엄격하게 체크하지 않는다.
const arr = [];
console.log(arr, "lenght =", arr.length);
arr[10] = "인덱스 범위 밖에 입력";
console.log(arr, "lenght =", arr.length);

// method들
// 배열 합치기: concat
const veges =["배추", "무", "쪽파"];
const sources = ["소금", "고춧가루", "새우젓"];
const ingrs = veges.concat(sources);
console.log("김장 재료:", ingrs);

// 배열 요소 연결 : join
console.log("목록:", ingrs.join(","));

// 자료의 입출력
// push: 맨 마지막에 요소 추가
// pop : 맨 마지막에 요소 추출
// shift: 맨 앞 요소 추출

// push + pop -> Stack처럼 사용 가능
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("STACK:", fruits);
fruits.push("Kiwi");
console.log("STACK:", fruits);
console.log("POP:", fruits.pop());
console.log("POP:", fruits.pop());
console.log("STACK:", fruits);

// push + shift ->  Queue
console.log("QUEUE:", fruits);
console.log("SHIFT:", fruits.shift());
console.log("SHIFT:", fruits.shift());
console.log("QUEUE:", fruits);

fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("원본:", fruits);
// 반전 : reverse
fruits.reverse();
console.log("REVERSE:", fruits);

// 잘라내기: slice
let slices = fruits.slice(1, 3);
console.log("SLICE:", slices);

// 정렬 : sort
console.log("원본:", fruits);
fruits.sort(); // 기본적으로는 오름차순 정렬
console.log("SORT:", fruits);
// 사용자 정의 기준으로 sort : 
fruits.sort(function(b,a){
    // callback function
    // return 0 -> 같다.
    // return 1, -1 : 대소 비교
    if (a>b){
        return 1;
    }else if(a<b){
        return -1;
    }else{
        return 0;
    }
    
});
console.log("CUSTOM SORT:", fruits);

// 문자열 분리: split (특정 구분자를 기준으로 분리 -> 배열)
const str = "JavaScript is something strange than other language";
let words = str.toUpperCase().split(" "); // 공백 기준으로 분리
console.log(words);

for (let i = 0; i < words.length; i++) {
    console.log("WORD:", words[i]);
    
}

//splice
//배열의 추출, 삽입, 삭제를 한번에 할 수 있는 method
console.log("원본:", fruits);
// 인수가 1개 -> index부터 끝까지 추출 후  제거
console.log("SPLICE:", fruits.splice(2)); 
console.log("원본:", fruits);
fruits = ["Banana", "Orange", "Apple", "Mango"];
// 인수가 2개 -> index부터 갯수 지정 후 추출
console.log("SPLICE:", fruits.splice(1,2)); // 1번 index부터 2개
console.log("원본:", fruits);
fruits = ["Banana", "Orange", "Apple", "Mango"];
// 인수가 3개 이상 -> 인덱스부터 개수 지정 추출 후 새 요소 삽입
console.log("SPLICE:", fruits.splice(1,2,"Kiwi","Orange"));
console.log("원본:", fruits);
