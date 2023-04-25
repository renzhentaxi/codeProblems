given:
- the distance of a pair of integer a and b is the absolute difference between a and b.
- an integer array `nums` and an integer `k`, 
return:
- return the `kth` smallest distance among all the pairs `nums[i]` and `nums[j]` where `0 <= i < j <nums.length`

notes:
i and j cannot be the same index.

on a sorted list, the smallest distance would have to be between i and j where i+1 = j
    the biggest distance would be between index 0 and length    
    the second biggest distance would be either index 0 to length -1 or 1,length
given an index i, the smallest distance would be `i-1` and `i+1`,

non binary search:
sort the array
for i in array:
    compute diff between i and i+1
while k > 0:
    k-=1
    remove the smallest value in queue
    add insert i,j+1
return k

binary approach:
we know the possible answer is between 0 and w where w is the difference between the min and max value of the array.

If we can find a function that returns true given an integer v if there are less than or equal to k pairs whose distance is less than v.
let this function be called cond

let start=0;
let end = w;
while (start < end)
    mid=...

    if cond(mid, k):
        end = mid;
    else:
        start=mid+1;
       
found the answer

the cond function needs to return if there are k or more pairs within the array
note we want the lowest value

is there k or more pairs with distance <= guess
count = # of pairs with distance <= v
let left =0; right=1;
if distance between left and right is greater than guess:
    increase left
    left +=1;
else:
    count += right - left;
return true if there are k or more pairs
