problem:
an array of `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

return the max profit you can achieve.
return 0 if you cannot achieve a profit.

notes:

brute force:
for each i, compute diff between [i] and [j] where i < j < length;

for each i, the max profit is the diff between [i] and [j] where [j] is the largest value in [i+1, length]
profit at i = max([i+1, length]) - [i]

two pass linear:

create an array such that maxOnTheRight[i] = max(prices[i+1, length])
profit= 0
loop over prices:
    current max =maxOnTheRight[i];
    current price = prices[i];
    current profit= max - price;
    if(current profit > profit)
        profit= current profit
return profit

requires n space.



one pass linear:
start with i,j = 0,1
if [i] >= [j]:
    i=j;
    j+=1;
else:
    profit = [j]- [i];
    res = max(profit, res);
    j+=1;

return res

This works because we know `i < j`.

if [j] < [i], that means we are not making a profit.
    which means we have to start searching from [j]
    note: we know i cannot be between [i,j] because all values inside that range is bigger than [i] and thus will always return a suboptimal profit.

