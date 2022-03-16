class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates = sorted(candidates)
        result = []

        self.helper(candidates, 0, target, [], result)
        
        self.helperV2(candidates, target, [], result)
        
        return result;

    def helperV2(self, nums, target, currentCom, result):
        if target < 0:
            return;
        if target == 0:
            result.append(currentCom);
            return;
        for i in range(len(nums)):
            self.helper(nums[i:], target - nums[i], currentCom + [nums[i]], result)
    
    def helper(self, candidates, index, target, currentCom, result):
        sum = 0;
        for num in currentCom:
            sum += num

        sub = target - sum;
        
        if sub == 0:
            result.append(currentCom);
            return;
        elif candidates[index] < sub:
            for i in range(index, len(candidates)):
                if candidates[i] > sub:
                    return;
                else:
                    tmpCom = currentCom[:]
                    tmpCom.append(candidates[i])
                    self.helper(candidates, i, target, tmpCom, result);
        
        elif candidates[index] == sub:
            tmpCom = currentCom[:]
            tmpCom.append(candidates[index]);
            result.append(tmpCom);
            return;
        else:
            return;