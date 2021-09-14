from typing import List


class Solution:
    def maxProfitAssignment(self, difficulty: List[int], profit: List[int], worker: List[int]) -> int:
        
        sorted_d_p = sorted(zip(difficulty, profit))
        
        result = max = i = 0;
        
        for w in sorted(worker):

            while i < len(sorted_d_p) and sorted_d_p[i][0] <= w:
                if sorted_d_p[i][1] > max:
                    max = sorted_d_p[i][1];
                i += 1;
                
            result += max

        return result;
                        
                
first = [2,4,6,8,10];
second = [10,20,30,40,50];
thrid = [4,5,6,7];
solution =  Solution()
print(solution.maxProfitAssignment([68,35,52,47,86],[67,17,1,81,3],[92,10,85,84,82]));