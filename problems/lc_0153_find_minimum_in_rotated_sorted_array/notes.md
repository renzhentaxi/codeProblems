given:
- an array of length n, sorted, ascending, no duplicates, rotated between 1 to n times;

return:
- the minimum element in the array

notes:
once rotated the array will either be a single ascending array or two ascending array.
if rotated n times, the array will just be a single ascending array and thus minimum element will just be the first element
if rotated less than n times and at least 1 times, then the array will contain two ascending array.
we know `array[0]` will always be bigger than minimum.

if mid > array[0];
    start= mid +1;
if mid = array[0];
    start = mid +1;
if mid < array[0];
    end = mid;
