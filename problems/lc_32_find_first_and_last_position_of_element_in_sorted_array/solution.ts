function searchRange(nums: number[], target: number): number[] {
    const {index,start,end} = findElement(nums, target);
    if(index === -1)
    {
        return [-1,-1]
    }
    return [findStartRange(nums, target,start,end), findEndRange(nums,target,start,end)]
};

function findElement(nums: number[], target:number): {index: number, start:number, end:number}
{
    let start = 0;
    let end = nums.length;
    while (start < end)
    {
        const mid =Math.floor((start + end)/2);
        const midValue = nums[mid];
        if(midValue === target)
        {
            return {index: mid, start, end};
        }
        if (midValue > target)
        {
            end = mid;
        } else 
        {
            start = mid +1;
        }
    }
    return {index:-1, start,end}
}

function findStartRange(nums:number[], target:number, start:number, end:number)
{
    let answer: number= -1;
    while (start < end)
    {
        const mid =Math.floor((start + end)/2);
        const midValue = nums[mid];
        if(midValue === target)
        {
            end = mid;
            answer = mid;
        } 
        else 
        {
            start = mid +1;
        }
    }
    return answer;
}

function findEndRange(nums:number[], target:number, start:number, end:number)
{
    let answer: number= -1;
    while (start < end)
    {
        const mid =Math.floor((start + end)/2);
        const midValue = nums[mid];
        if(midValue === target)
        {
            start = mid+1;
            answer = mid;
        } 
        else 
        {
          end= mid;
        }
    }
    return answer;
}