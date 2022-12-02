function solution(denum1, num1, denum2, num2) {
    const gcd = (num1, num2) => {
        if (num2 === 0) return num1;
        return gcd(num2, num1 % num2);
    };
    const lcm = (num1, num2) => (num1 * num2) / gcd(num1, num2);
    const nn = lcm(num1, num2)
    const dn1 = lcm(num1, num2)/num1 * denum1
    const dn2 = lcm(num1, num2)/num2 * denum2
    const dn = dn1 + dn2
    const dnnn = gcd(dn, nn)
    if(dnnn > 1){
        return [dn/dnnn, nn/dnnn]
    }
    return [dn, nn]
}