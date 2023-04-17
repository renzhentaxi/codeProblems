The problem asks for finding a peak element.

We can do this via a linear approach or binary.

Linear Approach,
loop from start to end, keep track of the direction (increasing/decreasing) as we move.
Start with increasing since `nums[-1] = -∞`.
The first time, we find a decreasing, we know we have found a peak.

`O(n)`

Binary search:
    we can split the array in half and get mid
    we can compare mid with its neignbors
    there are 4 possibilities
    1: left < mid > right, we found the peak and its mid
    2: left < mid < right, the is peak has to be on the right side
    3: left > mid < right, there are peaks on both sides
    4: left > mid > right, there is a peak on the left side

    in option 2,4 we can remove half of the problem space
    in option 3, we can just pick a side 
