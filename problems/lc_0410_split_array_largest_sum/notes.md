problem:
an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.
return the minimized largest sum of the split
a subarray is a contiguous part of the array.

notes:
we want to find n such that it is closest to sum/k
while bigger than all other parts

7 2 5 10 8

7 2 5, 10 8 k = 3
14, 18
7 2 5, 10 ,8 k = 3, max = 14

7 2 5 10 8 k =3

if optimal for k-1 exists, can we reuse it

1 4 1 5 1
1 4 1, 5 1

a b c d e f
ab, cd, ef

similar to 0719, binary search over the answer and not then input

let start = max value
let end = sum

while (start < end):
    mid =...
    if it is possible to split the array into k parts where the max is less than or equal to mid
        end = mid;
    else
        start = mid +1;
answer is start = end

how to tell if it is possible to split the array into k parts where max of the subarray is less tahn or equal to mid
given param: array, k ,mid

if we can split it into less than k arrays and the max is still less than mid, then the answer is yes
    since spliting the array further is only gonna decrease or keep the max

