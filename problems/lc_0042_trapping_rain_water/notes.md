problem:

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

notes:

water can only be trapped if there is a curve (decreasing, then increasing).

we cant do it with one pointer because we will run in to edgecases like `4 1 2 1 5`
where we will reach a peak `2` that is not actually the real peak `5`.

So the curve needs to be between the longest and largest peaks.


`4 1 2 1 5` notice that the size in `1 2 1` doesnt really matter (as long as they are smaller than the two peaks).

Given `i,j` if all values between `[i+1,j-1]` are less than `min([i], [j])`. then the amount of water trapped would equal to
`min([i], [j]) * (j - i) - sum([i+1,j-1])`.


`121` no trap
`1212` there is a trap `212`
`12123` there is a trap `2123`

given left and right,
    we can move the min to the next element bigger than it.
    and add that area to the total trapped water.
    we know this is optimal because that it is impossible to trap more water between those two points.
    the only way for it to trap more water is if there exist another element on the other side bigger than it
    but thats not possible since we only move if we receive a bigger one

algorithm:
let left = 0;
let right = length - 1;

while (left < right):
    if [left] <= [right]:
        const currentLeft = [left];
        while (left < right and [left] < currentLeft)
            left +=1;
    else:
        while (left < right):
            rightVal  = [right];
            if(rightVal > currentRightVal )
                break;
            area += currentRightVal-rightVal
            right +=1;
return area;

