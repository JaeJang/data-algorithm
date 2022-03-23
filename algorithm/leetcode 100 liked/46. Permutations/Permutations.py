class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        result = [];
        
        for x in nums:
            result.append([x]);
            
        for i in range(len(nums) -1):
            result = [perm+[num] for perm in result for num in nums if num not in perm];

        return result

    
    # using DFS
    def permuteV2(self, nums: List[int]) -> List[List[int]]:
        result = [];
        
        self.dfs(nums, [], result);
        
        return result;
        
    def dfs(self, nums, path, result):
        if not nums:
            result.append(path);
            return;
        
        for i in range(len(nums)):
            self.dfs(nums[:i]+nums[i+1:], path + [nums[i]], result)