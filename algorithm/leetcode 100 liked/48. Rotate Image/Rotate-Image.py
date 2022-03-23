class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        
        for i in range(len(matrix)):
            for j in reversed(range(len(matrix))):
                matrix[j].insert(0, matrix[i].pop())