// 함수의 선언
function sum(a, b){
    return a + b;
}

console.log(sum(10,20));

// 함수 표현식 : anoymous function

const csum = function(a,b){
    return a+ b;
}

console.log(typeof csum, // function
    csum(10, 20));

// anonymous function : 즉시 실행 함수
// 프로그램의 초기화 과정에서 많이 활용
(function(number){
    //  주로 1회성 초기화시
    console.log(`${number}를 이용하여 즉시 실행하였습니다.`);
})(2020);

// 함수의 매개변수
// javascript는 argument를 선언하지 않아도 function 으로 전달된 모든 parameter가 
// arguments array로 전달
function getTotal(){
    let result =0;

        for (let index = 0; index < arguments.length; index++) {
            result += arguments[index];
        }
        return result;
}
console.log("End of Code");    
console.log("getTotal: ",getTotal(1, 2, 3, 4, 5));
console.log("getTotal: ", getTotal(1, 2, "3", 4, 5));

// javascript의 함수는 그 자체로 객체다
// number, string 등 다른 객체와 마찬가지로 다른 함수의 인수로 전달 가능
function calcUsingCallback(val1, val2, func){
    // 외부에서 전달된 함수를 거꾸로 호출하는 것을 
    // "Callback" 함수라고 한다(중요)
    if (typeof func == "function"){ // 넘겨받은 인수가 함수인지 확인
        func(val1, val2);
    }
}

calcUsingCallback(3, 4, function(v1, v2){
    console.log( v1 + v2);
});

calcUsingCallback(3, 4, function(v1, v2){
    console.log(v1 * v2);
})


const f1 = function(){return "Hello"};
const f1Arrow = () => "Hello"; // 전달 인수가 없을 경우 () 

console.log(f1(), f1Arrow());

const f2 = function(name){ return "Hello " + name};
const f2Arrow = name => "Hello, " + name; // 

console.log(f2("Bit"), f2Arrow("Bit"));

// callback 함수 전달시 유용
calcUsingCallback(3, 4, (v1,v2) => {
    console.log("화살표 callback function:", v1 * v2);
})

const f3 = function(name, id){ return "Hello " + name + id};
const f3Arrow = (name, id) => "Hello, " + name + id; // 

console.log(f3("Bit", "X"), f3Arrow("Bit", "x"));