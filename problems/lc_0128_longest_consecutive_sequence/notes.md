problem:

given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.

should run in `O(n)` time

notes:

the longest consecutive elements does not need to be in order.

The run time requirement means we cant use sort (at least not traditional sort).


lookup = new map

loop over array:
    if element in lookup:
        continue
    if element-1 in lookup:
        lookup[element-1]= element
    if element+1 in lookup:
        lookup[element] = element+1
    else:
        lookup[element]=element

seen = new set
maxSoFar=-1;
loop over array:
    if element in seen:
        continue
    prev = element -1;
    count = 1;
    while next in lookup and prev !== lookup[prev]:
        count+=1;
        seen.add(prev);
        prev = prev-1;
    
    next = element + 1;
    while next in lookup and next !== lookup[next]:
        count +=1
        seen.add(next);
        next = next+1;

    if count > maxSoFar:
        maxSoFar = count;
return maxSoFar


improvement:
we are using a seen set to prevent doing extra work.
however, we can improve this a bit more by only considering elements that does not contain n-1
since if it has n-1, that implies it is not the start of the array and we can ignore it since we will eventually reach n-1 while looping.
we probably still want a set since n can appear multiple times
