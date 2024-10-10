# [평행]

[구현](https://school.programmers.co.kr/learn/courses/30/lessons/120875)

## 문제

Hello World!를 출력하시오.

## 입력

없음

## 출력

Hello World!를 출력하시오.

## 제한

## 예제 입력 1 복사

## 예제 출력 1 복사

```
Hello World!
```

## 힌트

## 알고리즘 분류

-   [구현](https://www.acmicpc.net/problem/tag/102)

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
        console.log('Hello World!')
        /*솔루션 작성완료*/
        process.exit();
    });

```