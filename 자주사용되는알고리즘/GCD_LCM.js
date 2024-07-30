//최대 공약수
let gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

//최소 공배수
let lcm = (a, b) => (a * b) / gcd(a, b);
