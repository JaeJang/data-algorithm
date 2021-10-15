class Solution:
    def convert(self, s: str, numRows: int) -> str:
        
        if numRows == 1:
            return s

        rows = []
        for i in range(numRows):
            rows.append([])
            
        currentRowIndex = 0
        zeroModValue = numRows + (numRows - 2)

        for i, c in enumerate(s):
            rows[currentRowIndex].append(c)
            if i % zeroModValue == 0:
                currentRowIndex += 1
            elif i % zeroModValue < zeroModValue // 2:
                currentRowIndex += 1
            elif i % zeroModValue >= zeroModValue // 2:
                currentRowIndex -= 1

        result = ''
        for row in rows:
            result += ''.join(row)
            
        return result
                
        
"""
0 2 4 6 8
1 3 5 7 9

P   A   H   N
A P L S I I G
Y   I   R

numRow + (numRow - 2)

P0      I6      N12
A1   L5 S7  I11 G13
Y2 A4   H8 R10
P3      I9

P0        H8
A1     S7 I9
Y2   I6   R10
P3 L5     I11  G13
A4        N12


P0         10
A1       9
Y2     8
P3   7
A4 6
L5
"""