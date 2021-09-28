def quickSort(arr):
    _quickSort(arr, 0 , len(arr) - 1);

def _quickSort(arr, start, end):
    if start >= end:
        return;

    pivot = (start + end) // 2;

    i = start;
    j = end;

    while i < j:
        while arr[i] < arr[pivot]:
            i += 1;
        while arr[j] > arr[pivot]:
            j -= 1;
        if i <= j:
            swap(arr, i , j);
            i += 1;
            j -= 1;

    _quickSort(arr, start, i - 1);
    _quickSort(arr, i, end);


def swap(arr, i, j):
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;

arr = [0, 9, 12, 4, 3, 1, 22, 6, 5];
arr2 = [0,1,2,3,4,5,6,7];
arr3 = [10,2, 11, 1, 9 , 5, 44, 3, 0, 7, 42];
quickSort(arr);
print(arr);
quickSort(arr2);
print(arr2);
quickSort(arr3);
print(arr3);
        

"""
0 9 12 4 3 1 22 6 5
0 1 12 4 3 9 22 6 5
0 1 3 4 12 9 22 6 5
"""
