class Solution:
    def minimumSwap(self, s1: str, s2: str) -> int:
        s1_x = s1_y = s2_x = s2_y = count = 0
        
        for i in range(len(s1)):
            if s1[i] == s2[i]:
                continue
            
            if s1[i] == 'x':
                s1_x += 1
                s2_y += 1
            else:
                s1_y += 1
                s2_x += 1

        if (s1_x + s2_x) % 2 == 1 or (s1_y + s2_y) % 2 == 1:
            return -1
        
        count  = s1_x // 2 + s1_y // 2
        
        if s1_x % 2 == 1:
            count += 2
        
        return count
            
        