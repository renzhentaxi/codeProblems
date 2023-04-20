function findMin(nums: number[]): number {
    let start = 0
    let end = nums.length-1;
    while (start < end)
    {
        const mid = Math.floor((start+end)/2);
        const midVal = nums[mid];
        
        if(midVal > nums[end])
        {
            start = mid +1;
        }
        else if (midVal < nums[start])
        {
            start = start +1;
            end = mid;
        }
        else if (nums[start]< midVal && midVal < nums[end]) {
            return nums[start];
        } else {
            end -=1;
        }
    }
    return nums[start];
};