problem:
given an integer array nums, return all triplets such that they add up to 0.
do not return duplicate triplets
each element in the triplet must have different indexes

notes:
if we isolate one of the elements then the problem becomes a twosum problem.
    for each element n find two other elements that adds up to -n
    big o of n * n since there are n elements and each search will take n times 
    we also need to remove duplicates somehow

if we sort the array:
    n log n

then move from left to right:

if we add all the elements to a set first then sort the set
left = 0, right = n
check -sum exists, if true add to results

since sum is 0 it means that either all three values are 0 or atleast one negative and 1 positive value.

sort the array;

first = 0;
let left and right = first+1, end of array-1

while [left]+[first] <=0 && left < right:
    check if left + right = - first:
        if true:add
    if > -
        move left
    if < -:
        move right
first +=1;
