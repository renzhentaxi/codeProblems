# 1. floor = f-1, if we drop it at f-1 it is safe but when we drop at f it breaks
# 2. egg breaks if it is dropped above its floor
# 3. so if willEggBreak(floor, f-1) and not willEggBreak(floor, f): then we found the floor
# 
# with brute we need x # of safe drop plus 1 bad drop x would be equal to the floor 1-99,
# for 100, we can assume that if we drop at 100 and it dont break then it is 100 x = 100
#
#
#with binary split
#
import sys

class Egg(object):
   floor = 0;
   def __init__(self, floor):
      self.floor = floor;
   def drop(self, floor):
      if floor > self.floor:
         #print("dropping from floor: ", floor, " egg broke")
         return False;
      else:
        # print("dropping from floor: ", floor, " egg didnt break")
         return True;

debug = True;

def debugPrint(*objects, sep=' ', end='\n', file=sys.stdout, flush=False):
   global debug;
   if (debug):
      print(*objects,sep=sep,end=end,file=file,flush=flush)

def bruteforce(minF, maxF, egg):
   trial = 0
   if(minF> maxF):
      debugPrint("the min floor is greater than maxFloor, this shouldn't happen")
      return -1, trial
   for f in range(minF, maxF+1):
      trial +=1
      if not egg.drop(f):
         debugPrint("trial", trial,"dropped from", f, "and the egg broke, therefore the floor should be", f-1, "or less")
         return f-1,trial
      else:
          debugPrint("trial", trial,"dropped from", f, "and the egg didn't break")
   debugPrint("since we are we dropped at max Floor and the egg didn't break, we can assume its floor is", f,"or more")
   return f,trial

def binaryApproach(minF, maxF, egg):
   trial = 0
   if(minF> maxF):
      debugPrint("the min floor is greater than maxFloor, this shouldn't happen")
      return -1, trial

   trial +=1
   mid = int((minF+maxF+1)/2)
   prevMid = minF-1
   while (egg.drop(mid)):
      
      debugPrint("trial", trial, "dropped from",mid, "and the egg didn't break.")
      if mid == maxF:
         debugPrint("since we dropped at max and it didn't break, therefore we can assume its floor is", mid, "or more")
         return mid,trial
      prevMid = mid
      trial+=1
      mid = int((mid+maxF+1)/2)
   debugPrint("trial", trial,"dropped from", mid, "and the egge broke")
   if(prevMid == mid-1):
      debugPrint("since it broke at", mid," but not at", prevMid, "we can assume its floor is",prevMid)
      return prevMid, trial
   bruteResult = bruteforce(prevMid+1,mid-1,egg)
   return bruteResult[0], trial + bruteResult[1]
def IncrementApproach(increment):
   def IncrementApproachX(minF, maxF, egg):
      trial = 0
      if(minF> maxF):
         debugPrint("the min floor is greater than maxFloor, this shouldn't happen")
         return -1, trial

      trial +=1
      s = increment
      print(s)
      prevS = minF-1
      while (egg.drop(s)):
         
         debugPrint("trial", trial, "dropped from",s, "and the egg didn't break.")
         if s == maxF:
            debugPrint("since we dropped at max and it didn't break, therefore we can assume its floor is", s, "or more")
            return s,trial
         prevS = s
         trial+=1
         s=int((s+maxF+1)/2)
         print(s)
      debugPrint("trial", trial,"dropped from", s, "and the egge broke")
      if(prevS == s-1):
         debugPrint("since it broke at", s," but not at", prevS, "we can assume its floor is",prevS)
         return prevS, trial
      bruteResult = bruteforce(prevS+1,s-1,egg)
      return bruteResult[0], trial + bruteResult[1]
   return IncrementApproachX

def calcStat(func):
   best = 100;
   worst = 1;
   total = 0;
   for x in range(1,101):
      trial = func(1,100, Egg(x))[1]
      if (trial < best):
         best = trial
      if (trial > worst):
         worst = trial;
      total +=trial
   print("best: ", best, " worst: ", worst, " average: ", total/100)
debug = False
#calcStat(bruteforce)
#calcStat(binaryApproach)
calcStat(IncrementApproach(11))
##calcStat(IncrementApproach(11))
#calcStat(IncrementApproach(12))

#print(ThreeApproach(1,10, Egg(10)))
#print(binaryApproach(1,100,Egg(50))[1])
