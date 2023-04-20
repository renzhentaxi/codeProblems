// binary search

function findPeakElement(nums: number[]): number {
    let start = 0;
    let end = nums.length;

    while (start < end)
    {
        //invariant: start <= peak < end
        const mid = Math.floor( (start+end)/2);
        const midValue = nums[mid];
        const isBiggerThanLeft = mid === 0 ? true : midValue > nums[mid-1];
        if(isBiggerThanLeft)
        {
            const isBiggerThanRight = mid === nums.length-1 ? true :midValue > nums[mid+1]; 
            if(isBiggerThanRight)
            {
                return mid;
            }
            start = mid +1;
        } else 
        {
            end = mid;
        }
    }
    return -1;

};
//mistake made: did not hold up the invarint. I set end = mid -1 which removed mid-1 from the list of answers which is wrong
//testcases [2,1] 0
//[1,3,2,1] ,1