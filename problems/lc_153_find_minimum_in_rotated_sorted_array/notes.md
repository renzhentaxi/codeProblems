the array is sorted and then rotated. 
This means array is now made up with two sections with increasing numbers.
The first section is greater than the second section.
The minimum is the first character of the second section

The nums are unique
binary search:
    start = 0;
    end = nums.length;
    let answer = 0;
    invariant:
        start <= minimum < end;
    while (start < end)
        if (mid > nums[start])
            {
                start = mid +1;
            }
        else {
             we are on the second section
            the minimum is either mid or in start:mid;
            answer = mid;
            end = mid;
        }
    
    here start == mid
    return answer;
 
       


the question also included testcases where its not rotated or single element.
In that case we know the array is no longer split into two parts. so the algorithm will fail.
We can fix this by realizing that 
    nums[0]< nums[nums.length-1] when the array is not rotated
    and the minimum is always nums[0];
    so we can return nums[0];
    same thing with single element array.
