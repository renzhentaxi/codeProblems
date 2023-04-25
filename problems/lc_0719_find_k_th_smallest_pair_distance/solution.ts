function smallestDistancePair(nums: number[], k: number): number {
    const sorted = nums.sort((a,b)=> a-b);

    let start =0;
    let end = sorted[sorted.length-1]- sorted[0];

    while (start < end)
    {
        const mid = Math.floor ((start+end)/2);
        if(cond(sorted, mid, k))
        {
            end = mid;
        } else 
        {
            start = mid+1;
        }
    }
    return start;
};
/**
 * returns true if there are k or more pairs with distance less than equal to value,
 */
function cond(nums:number[], value:number, k:number):boolean
{
    let left =0;
    let count=0;
    for(let right = 1; right < nums.length; right+=1)
    {
        while (nums[right] - nums[left] > value)
        {
            left +=1;
        }
        count += right - left;
    }
    return count >= k;
}