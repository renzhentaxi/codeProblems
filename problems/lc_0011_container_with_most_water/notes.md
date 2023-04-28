problem:

given an array `height` of length `n`. find two lines that has the highest area.
where area = min(height[i], height[j]) * j - i;

notes:
this problem can be solved with twopointer/greedy.

let left = 0; and right = length - 1;
compute its area.

let prevMin = min(left,right);
while (left < right)
    // goal is to increase min(left,right);
    if height[left] <= height [right]:
        if(height[left] > prevMin)
            calc new area
        left +=1;

    else:
        if(height[right]> preMin)
            calcArea
        right -=1;
return area;

this only works because:
    the area is made up with h * w and we know w is largest when picking 0 and length -1.
    from here we know that if there is a better solution, then it has to be h2 * w2 where h2 is greater than h but w2 is less than w.

