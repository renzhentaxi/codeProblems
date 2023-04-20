function findClosestElements(arr: number[], k: number, x: number): number[] {
    if (k >= arr.length) {
        return arr;
    }

    let start = 0;
    let end = arr.length - k + 1 ;

    //find closest to k
    let j=-1;
    while (start < end)
    {
        //invariant start <= j < end
        // where array[j:j+k] will contain the closest k neighbors
        let mid = Math.floor((start + end) / 2);
        const jStart = arr[mid];
        const jEnd = arr[mid+k-1];

        let jStartDistance =dist(arr,x,mid)
        let jEndDistance = dist(arr,x, mid+k-1)
        // console.log({jStartDistance, jEndDistance})
        if(jStartDistance > jEndDistance)
        {

            j= mid;
            const newEndDistance = dist(arr, x, mid + k);
            if(jStartDistance > newEndDistance)
            {
                start = mid+1;
            } else {
                break;
            }
        }
        else if (jStartDistance < jEndDistance)
        {
            j=mid;
            const newStartDistance = dist(arr,x, mid-1);
            if(newStartDistance <= jEndDistance)
            {
                end = mid;
            }
            else {
                break;
            }
        }
        else {
            if (jStart === jEnd)
            {
                if (jStart < x)
                {
                    j= mid;
                    const newEndDistance = dist(arr, x, mid + k);
                    if(jStartDistance >= newEndDistance)
                    {
                        start = mid+1;
                    } else {
                        break;
                    }
                }
                else if(jStart > x)
                {
                    j=mid;
                    const newStartDistance = dist(arr,x, mid-1);
                    if(newStartDistance <= jEndDistance)
                    {
                        end = mid;
                    }
                    else {
                        break;
                    }
                }
                 else 
                 {
                    return arr.slice(mid, mid+k)
                 }
            } else 
            {
                return arr.slice(mid, mid+k)
            }
        }
    }
    return arr.slice(j, j+k);
   
};

function dist(arr:number[], x: number, index:number)
{
    if (index <  0 || index >= arr.length)
    {
        return Number.MAX_VALUE;
    }
    return Math.pow(arr[index]-x,2);
}
console.log(
findClosestElements([1,2,3,4,5], 4,3)
)
console.log(findClosestElements([1,3],1,2))
