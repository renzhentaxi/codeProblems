given: 
- an array of integers `nums` containing `n+1` integers where each integers is in the range `[1,n]` inclusive.
- there is only one repeated number in `nums`. can repeat mutliple times
return:
- the repeated number
- without modifying the array and only use constant extra space

notes:
array is not sorted
we can only use constant extra space

if we can modify the array, we can use nums as a lookup table.
iterate each value in the array and place them in the right place
then if we ever encounter a collusion, we know we have found the error

we can count number of values less than n/2
and number of values greater than n/2

let a = number of values less than floor(n/2)
let start = 1
let end = n;
invariant:
    start <= x <= end

while start < end
    mid = ...
    loop over array and count all numbers less than equal to mid
    if count === mid:
        start = mid+1;
    if count < mid
        start = mid +1;
        if there is a dup in under mid, then it has to show up since anynumber above mid will be filled
    if count > mid
        end = mid
return start

this works because given any number x
the array will contain a numbers less than equal to x and b numbers greater than x
the sum of those numbers has to be n+1
a+b = n+1,

if there is no dups in `a`, then a = x
if there is no dups in `b`, then b = x;
since dub can only be in a or b,

lets say `a` has no dups and is less elements than x
let x= 3,`a` = 1,3
this means `b` must contain j elements greater than x and less than = n
j = n+1 - 2, n-1 elements which is not possible if x does not contain duplicates

`a` has dups and less elements or equal than x
let x = 3, `a` = 1,3,3
n = 5
which means b needs to have `n+1-a` units aka 3 units
there are only two possible units between 3 < j<=5 (4,5)
so this is not possible


can you solve this problem linearly?
if we treat the problem as a linked list
can we prove that it will result in a cirular list
43122

0 1 2 3 4
4 3 1 2 2

0 -> 4 - 2 - 1 - 3 - 2 - 1

how can we prove it will always be line => cycle

h 2 3 1
t 4 2 1
- there a n+1 elements
- elements can only be 1-n inclusive

given i in [0,n]
nums[i] will be in [1, n+1]


there has to be aleast one cycle
    assume there is a linear path (no cycle), then there must be an element at the end.
    however the last element has to point to somewhere and that somewhere will always be another element in the array
    thus it cannot be linear


nums[0] will not be part of a cycle since no elements can point to it
elements within the path nums[0] to nums[x] will be a linear path where nums[x] is the duplicate
why?
    the only one for a linear path to enter a cycle is if the element is being referred by another element within the cycle
    aka the end of the path points to cycle entry and another element points to it

the duplicates will belong to a cycle, how can we prove that nums[0] will always enter the cycle the duplicates are in.
    nums[0] will point to a cycle.
    if nums[0] point to a cylce without duplicates:
        then nums[0] is the duplicate
    if nums[0] point to a cycle with duplicates:
        then there is a duplicate in the cycle

how to find the duplicate once we are in the cycle:

0 1 2 3
2 2 1 3
0 -> 2 -> 1 -> 2

h=2t = f + n*C + a
t=f + a
h = 2(f+a)
2(f+a) = f  + n*c +a
f +a = n*C




