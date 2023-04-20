given:
- sorted array that is rotated 1 to n times
- array contains duplicates
return:
- minimum value


if rotation,
let start = 0
let end = nums.length;
let answer = -1;

while (start < end):
    mid = ...
    midValue = nums[mid];

    if(midValue > nums[0])
    {
        assume we are the correct range
        start<= i < end
        might be single array
            minimum has to be nums[0];
        might be double array
            start = mid+1;
            
    }
    if(midValue < nums[0])
    {
        single array
            impossible
        double array
            answer = mid;
            end = mid;
    }
    if(midValue === nums[0])
    {
        if single array
            answer is midValue;
        double array
            start = mid +1;
        if midValue is not min, then start = mid +1;
    }

nums[mi] > nums[hi]
    min in [mi + 1, hi]
we know min must exists in the array:
    low, high
    if mid > high
        implies that mid is located in the first array
        low = mid+1;
    if mid < low
        low+1, high = mid
    else:
        low <= mid <= high
        return low;

3 3 3 1 3
3 3 3 

