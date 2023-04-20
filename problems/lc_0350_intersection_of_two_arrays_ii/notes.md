given:
- two array
return:
- their intersection

using linear:
similar to lc_0349, just need to remove the check for duplicates
using set:
    we can use a counter method
    and reconstruct the array after

if one of the array is smaller than the other array:
    set approach:
        O (m + n)
    linear approach:
    O ( minimal of m, n)
    linear/sorted approach is better