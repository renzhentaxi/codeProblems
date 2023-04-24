given:
- two sorted arrays `nums1` and `nums2` of size `m` and size `n`
return:
- return the median of the two sorted arrays
- big O of `log (m+n)`


notes:
we know median has to exist
the median is either a single element or the average of two elements depending on the size of the two arrays.

If the combined size is even:
    then there are two indices
    [a,b,c,d,e,f] c,d
    [a,b,c,d] b,c

If the combined size is odd:
    [a,b,c,d,e] c
    [a,b,c] b


If even:
There are 4 possibilities.
- both indices are in nums1
- both indices are in nums2
- smaller index in nums1 and bigger in nums2
- smaller index in nums2 and bigger index in nums1


if we find one of the index, the other one should be trivial to find

The median should divide the array in to two partitions
    [a,b,c,d,e] => [a,b] [c,d,e] in this case, the median is the smallest value in the second partition
    [a,b,c,d] => [a,b] [c,d] in this case the median is the avg of the largest value in the first partition and the smallest value in the second partition

given `nums1` and `nums2`,
we can divide the them into partitions
         nums1 nums2
    even [a,b,c,d,e] [1,2,3,4,5] => [a,b] [c,d,e] | [1,2] [3,4,5]

let x and y be the partition index such that 
    nums1[0,x] and nums1[x,length]
    nums2[0,y] and nums2[y,length]
for this to be the correct partition
    nums1[0,x] + nums2[0,y] must equal to nums[0, m] where m = length // 2;
    which means x+y = m
    aka y = m - x;

while we can probably try to narrow down both x and y, it is probably better to only narrow one down and calculate the other

Q: which one should we narrow down? does it matter?
A: 
    0 <=x <= length

    if x === 0, that means none of nums1 belongs to the partition
        which means y should equal to m
    if x === length, that means all of nums1 belongs to the partition
        y should equal to m - x
        1 1234        
        x=1 [1]
        y=1 [1]
        1 234
    ...
    same with y
    since it doesnt matter which one to narrow down, we should probably pick the smaller array since that means less work


start with median of the smaller array
    partition at this spot
question:
    what happens if y is out of bound:
    say nums1 has 5 elements and nums y has 1 elements
    m = 6//2 = 3
    x = 5//2 = 2
    y = 3-2 =1
    [a,b,c,d,e] [g]
    [a,b] [g] which is okay
    y will never be bigger than length of nums2

    say nums has 4 elements y has 1 elements
    m = 5 // 2 = 2
    x = 4//2 = 2
    y = 0
    [a,b,c,d] [g]
    [a,b] []

algorithm:
let m = (nums1.length + nums2.length) // 2
let start = 0;
let end = length of the smaller nums
let small = smaller nums
let big = bigger nums

while (start <= end)
{
    let mid = ...
    let otherMid = m - mid;

    let smallLeftEnd = small[mid-1];
    let smallRightStart = small[mid];
    let bigLeftEnd = big[otherMid-1];
    let bigRightStart = big[otherMid];

    if (smallLeftEnd <= bigRightStart && bigLeftEnd <= smallRightEnd)
    {
        found solution
        if odd:
            smaller of right
        if even:
            avg of bigger of left and smaller of right
    }
    if(smallLeftEnd > bigRightStart)
    {
        end = mid-1;
    } else if bigLeftEnd > smallRightStart
    {
        start = mid+1;
    }
    //if start == 0 then none of small belongs to right
    //if start == end then all of small belongs to left
}
return -1;