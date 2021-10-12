class Solution:
    # 99% faster
    def lengthOfLongestSubstring(self, s: str) -> int:
        current = ''
        maxCount = 0 
        
        for c in s:
            if c not in current:
                current += c
                
            else:
                if maxCount < len(current):
                    maxCount = len(current)
                
                index = 0
                for _c in current:
                    index += 1
                    if _c == c:
                        break;
                current = current[index:] + c
        
        if maxCount > len(current):
            return maxCount
        else:
            return len(current)


    # less performance but cleaner
    # sliding window
    def lengthOfLongestSubstringV2(self, s: str) -> int:
        l = maxCount = 0
        usedChar = {}
        
        for r, c in enumerate(s):
            if c not in usedChar:
                
                maxCount = max(maxCount, r - l + 1)
            else:
                if l <= usedChar[c]:
                    l = usedChar[c] + 1
                else:
                    maxCount = max(maxCount, r - l + 1)
            usedChar[c] = r
        return maxCount