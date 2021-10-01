"""
In order for ant warriors to loot food warehouses without being caught by scouts,
they must loot food warehouses at least one space away. 
Write a program to find the maximum amount of food you can get when you are given information about N food warehouses for ant transcription.


Example
Input
4
1  3  3  8 10 16 110
1  3  1  5  7  8 100

      2  6  8  9 101
         8 10 11 103
            9 13 102
              16 108
                 110
Output
110
"""

def maxFoodFromAttactV1(arr):
    size = len(arr);

    dp_table = [0] * size;

    max_value = 0
    for i, value in enumerate(arr):
        for j in range(i + 2, size):
            addition = value + arr[j] if dp_table[i] == 0 else dp_table[i] + arr[j]
            if dp_table[j] == 0:
                dp_table[j] = addition
            else:
                if dp_table[j] < addition:
                    dp_table[j] = addition;
            if max_value < addition:
                max_value = addition
    
    return max_value

def maxFoodFromAttactV2(arr):
    size = len(arr)

    dp_table = [0] * size;

    dp_table[0] = arr[0]
    dp_table[1] = max(arr[0], arr[1])

    for i in range(2, size):
        dp_table[i] = max(dp_table[i - 1], dp_table[i - 2] + arr[i])
    
    return dp_table[size - 1]

def max(a, b):
    return a if a > b else b

            
print(maxFoodFromAttactV1([1, 3, 1, 5, 7, 8, 100]))
print(maxFoodFromAttactV2([1, 3, 1, 5, 7, 8, 100]))