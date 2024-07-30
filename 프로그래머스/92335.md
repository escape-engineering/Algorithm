# [k진수에서_소수_개수_구하기]

[소수판별](https://school.programmers.co.kr/learn/courses/30/lessons/92335)

##### 문제 설명

양의 정수 `n`이 주어집니다. 이 숫자를 `k`진수로 바꿨을 때, 변환된 수 안에 아래 조건에 맞는 소수(Prime number)가 몇 개인지 알아보려 합니다.

-   `0P0`처럼 소수 양쪽에 0이 있는 경우
-   `P0`처럼 소수 오른쪽에만 0이 있고 왼쪽에는 아무것도 없는 경우
-   `0P`처럼 소수 왼쪽에만 0이 있고 오른쪽에는 아무것도 없는 경우
-   `P`처럼 소수 양쪽에 아무것도 없는 경우
-   단, `P`는 각 자릿수에 0을 포함하지 않는 소수입니다.
    -   예를 들어, 101은 `P`가 될 수 없습니다.

예를 들어, 437674을 3진수로 바꾸면 `211`0`2`01010`11`입니다. 여기서 찾을 수 있는 조건에 맞는 소수는 왼쪽부터 순서대로 211, 2, 11이 있으며, 총 3개입니다. (211, 2, 11을 `k`진법으로 보았을 때가 아닌, 10진법으로 보았을 때 소수여야 한다는 점에 주의합니다.) 211은 `P0` 형태에서 찾을 수 있으며, 2는 `0P0`에서, 11은 `0P`에서 찾을 수 있습니다.

정수 `n`과 `k`가 매개변수로 주어집니다. `n`을 `k`진수로 바꿨을 때, 변환된 수 안에서 찾을 수 있는 **위 조건에 맞는 소수**의 개수를 return 하도록 solution 함수를 완성해 주세요.

___

##### 제한사항

-   1 ≤ `n` ≤ 1,000,000
-   3 ≤ `k` ≤ 10

___

##### 입출력 예

| n | k | result |
| --- | --- | --- |
| 437674 | 3 | 3 |
| 110011 | 10 | 2 |

___

##### 입출력 예 설명

**입출력 예 #1**

문제 예시와 같습니다.

**입출력 예 #2**

110011을 10진수로 바꾸면 110011입니다. 여기서 찾을 수 있는 조건에 맞는 소수는 11, 11 2개입니다. 이와 같이, 중복되는 소수를 발견하더라도 모두 따로 세어야 합니다.

## 첫번쨰 풀이

```javascript
function isPrimeNum(num) {
    if (num<=1) return false;
    if (num%2==0) return false;
    for (let i = 3; i<=Math.sqrt(num); i+=2) {
        if (num%i == 0) return false
    }
    return true;
}
function solution(n, k) {
    let primeNumCount = 0;
    let nTok = n.toString(k).split(0).filter((item) => item !== '')
    console.log(nTok)
    for (let i = 0; i<nTok.length; i++) {
        if (nTok[i].length === 1) {
            let target = Number(nTok[i])
            if (target == 1) continue;
            console.log('i= ', i, target)
            isPrimeNum(target) ? primeNumCount++ : null;
        } else {
            //앞에서부터 경우의 수
            for (let j = 1; j<=nTok[i].length; j++) {
                let target = Number(nTok[i].slice(0,j))
                if (target == 1) continue;
                console.log('j= ', j, target)
                isPrimeNum(target) ? primeNumCount++ : null;
            }
            //뒤에서부터 경우의 수
            for (let l = nTok[i].length-1; l>0; l--) {
                let target = (nTok[i].slice(l, nTok[i].length))
                if (target == 1) continue;
                console.log('l= ', l, target)
                isPrimeNum(target) ? primeNumCount++ : null;
            }
        }
    }
    return primeNumCount;
}
```

- 문제이해 실패
- 각 숫자의 경우의 수에따라 소수를 판별하는 것으로 착각해 문제 이해를 실패함
- 문제는 k진수로 변환 후 0을 기준으로 나오는 숫자 덩어리에 대한 소수판별 진행임

## 재풀이

```javascript
function isPrimeNum(num) {
    if (num<=1) return false; // 1이하일 때 false
    if (num === 2) return true // 2일 때 true
    if (num%2===0) return false; // 짝수일 때 false
    for (let i = 3; i<=Math.sqrt(num); i+=2) {
        if (num%i === 0) return false // 나눠질 때 false
    }
    return true; // 모든 경우 통과시 true반환
}
function solution(n, k) {
    let primeNumCount = 0;
    let nTok = n
                .toString(k)
                .split(0)
                .filter((item) => item !== '' && item !== '1')
                .map((item) => Number(item))
    for (let i = 0; i<nTok.length; i++) {
        isPrimeNum(nTok[i]) ? primeNumCount++ : null
    }
    return primeNumCount;
}
```

- 문제에 대한 완벽한 이해 필요
- 풀이방식은 틀리지 않았음