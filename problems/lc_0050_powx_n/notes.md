the problem asks us to calculate power(x,n);

the basic approach is to multiply 1 by x n times.
This works well for small value of n
but for large n, it becomes harder O(n);

known:
x^n = x^n/2 * x^n/2
x * x = x^2
x^2 * x^2 = x^4

we can increase result by multiplying itself until we approach n
then
x^10*x^10 = x^20
x^26
x^20 * x^6;

let pow(x,n) be a sub function

if (n === 0)
{
    return 1;
}
if (n=== 1)
{
    return x;
}
const half = pow(x, n/2)* pow(x, n/2);
const remain = n%2 === 1 ? x: 1;

return half * remain;
O(log(n))
