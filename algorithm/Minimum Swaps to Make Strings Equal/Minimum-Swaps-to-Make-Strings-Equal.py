class Solution:
    def minimumSwap(self, s1: str, s2: str) -> int:
        xy = yx =  count = 0
        
        for i in range(len(s1)):
            if s1[i] == s2[i]:
                continue
            
            if s1[i] == 'x':
                xy += 1
            else:
                yx += 1

        if (xy + yx) % 2 == 1:
            return -1
        
        count  = xy // 2 + yx // 2
        
        if xy % 2 == 1:
            count += 2
        
        return count
            
        