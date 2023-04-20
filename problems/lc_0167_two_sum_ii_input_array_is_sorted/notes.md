given:
- 1 indexed array that is sorted, contains duplicates

return:
- find two numbers such that they add up to a `target` number


notes:
two pointer approach
the array is sorted
start = 0;
end = nums.length

if(start < end)
{
    if (start + end === target)
    {
        return true;
    }
    if(start + end > target)
    {
        end -=1;
    }
    else
    {
        start +=1;
    }

}
O(n)

binary search approach:
for each i in start run binary search (for target - i)
