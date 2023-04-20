function myPow(x: number, n: number): number {
    const res = pow(x, Math.abs(n));
    return n > 0 ?res : 1/ res;
};
function pow(x:number, n:number):number
{
    if (n=== 0)
    {
        return 1;
    }
    if (n === 1)
    {
        return x;
    }
    const half = pow(x, Math.floor(n/2));
    const remainder = n % 2 === 1 ? x: 1;
    return half * half * remainder;
}