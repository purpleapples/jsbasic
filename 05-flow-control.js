// 1. 구구단
for (let i = 1; i < 10; i++) {
    let str = ``;
    for (let j = 2; j < 10; j++) {        
        str +=`{j} * {i} = {i * j}\t`;
    }
    console.log(str);
    console.log();
}

// 2. 역삼각형 - for, while


for (let i = 7; i > 0; i--) {
    let star = '';
    for (let j = 0; j < i; j++) {
     star += '*';        
    }
    console.log(star);
}