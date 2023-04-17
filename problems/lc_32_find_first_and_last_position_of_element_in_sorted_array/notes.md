non decreasing meaning duplicates
number might not exist

start/end , end is inclusive

we can solve this in 3 parts:
find any index with that number
    if none return -1,-1
once we have an index
    we can find start by checking the range x,y
    end by checking the range x,y

can we do it in one loop/search

start = 0
end = nums.length;

let first=-1;
while (start < end)
    if(mid === number)
    {
        first = mid;
        break;
    }

    ...
if(first === -1)
{
    return [-1,-1]
}

let numStart = start;
let numEnd = mid+1;
while (start < end)
    if mid === number;
        numEnd = mid;
        answer = mid;
    else 
        numStart = mid +1;

let numStart = mid;
let numEnd = end;
while (start < end)
    if mid === number;
        answer = mid;
        numStart =mid+1;
    else
        numEnd= mid;
         