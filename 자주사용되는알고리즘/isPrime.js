function isPrimeNum(num) {
    if (num <= 1) return false; // 1이하일 때 false
    if (num === 2) return true; // 2일 때 true
    if (num % 2 === 0) return false; // 짝수일 때 false
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false; // 나눠질 때 false
    }
    return true; // 모든 경우 통과시 true반환
}
