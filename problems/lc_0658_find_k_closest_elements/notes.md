We need to return a subarray of k integers
the array can be described with a start and end index.

if k is greater than or equal to array length, then we can return the array itself.
otherwise, we know the array must exists.
X might not exists tho

let j be the start index
the array might contain duplicates

invariant:
    0 <= j <= length - k 
        get mid 
        at mid check if 
            compare [mid] with [mid+k-1]
                1  4
                is mid closer or end closer
                if same distance then we have found the answer (assume no duplicates)
                1 5
                end = mid
                0 4
                start = mid

1 2 3 4 5 6 7 8
mid = 3
1 2 3 4 5 = distance 2 2
  2 3 4 5 6 = distance 1 3
    3 4 5 6 7 = distance 0 4
      4 5 6 7 8 = distance 1 5

let our target to be j where array[j...j+k] contains the k elements closest to X

what we know:
- array contains duplicates
- array is sorted
- x may or may not exists in the array

what we can infer:
- if array's length is less than or equal to k, then the answer is the array itself

let our target be `j` where `array[j:j+k]` contains the k elements closest to X.

If `x` exists in the array:
    it would look like aaaaxxxxbbbb
        where a is less than x and b is greater than x
        a1 a2 a3 xxxx b1 b2 b3
        we can view the array as two arrays
        one decreasing and one increasing if we replace it with the distance to the array

        when we pick a `j`
            there are a few possiblities
            jStart =distance array[j] and jEnd= distance array[j+k-1]
            if jStart is closer to X
                then increasing j will cause the whole j array to be further than right now
                so the only possiblity is to descrease j or keep j as is.
                decrease j if we know array[j+k] is further
                if array[j+k] is closer
                    then we want to move upwards
            if jEnd is closer to X
                then decreasing jStart will cause the whole array to be further from x
                we want to increase j or keep j as is
            if they are same distance to X
                there are two main possiblities
                jStart and jEnd are the same number
                    if they are the same number.
                        we can check if jStart/jEnd is less than or greater than x
                        if less than
                            then we can increase or do nothing
                        if more than
                            then we can decrease or do nothing
                jStart and jEnd are different number
                        this means that we should be at the optimal step
                        anymove will increase the distance
note:
    x could be negative
using binary approach and build range is probably same performance since we need to build array anyways

if start distance is greater than end + 1
    increase start by 1
        means we have a good solution
        how do we guarnteet start+1 is better than start
        a,b,c b,c,d
        this is only true if a is further than d
if start distance is less than end distance
    b,c,d,e  a,b,c,d
    b is closer than e
    a,b,c,d
    we just removing e from the array
if start distance is equal to end distance
    decrease by 1
    a, b, c, d
    distance a and d are the same
    since a is less than d, a is the better option
    c is also closer than d
