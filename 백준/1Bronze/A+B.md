## 문제

두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

## 입력

첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

## 출력

첫째 줄에 A+B를 출력한다.

## 제한

## 예제 입력 1 복사

```
1 2
```

## 예제 출력 1 복사

```
3
```

## 첫번째 풀이

```javascript
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline
    .on("line", function (line) {
        input = line.split(" ").map((el) => parseInt(el));
    })
    .on("close", function () {
        /*솔루션 작성*/
        const [a,b] = input
        console.log(a+b)
        /*솔루션 작성완료*/
        process.exit();
    });
```