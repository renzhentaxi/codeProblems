we are tasked to find if an integer is a perfect square of not.

Question: does it includes negative integers? all negative integers are not perfect squares unless we believe in sqrt(-1);
For an integer `n`, we know it is a perfect square if `x` exists such that `x` is an integer and `x*x == n`;

`x` could be anywhere from `1` to `n` inclusive;
if n === 1,
    then we know x = 1
if n > 1,
    then we know x could be [1, n/2];
    we check mid point ^2 to see if its valid if so
        return true
    if not, we check if it is smaller or bigger than `n`
    if smaller:
        start = mid+1;
    if bigger:
        end = mid;