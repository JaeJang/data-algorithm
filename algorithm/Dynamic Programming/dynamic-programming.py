import time

def timeit(fn, n):
    start = time.time() * 1000
    print(fn(n))
    end = time.time()* 1000
    print(end - start)

# Top to Bottom - may occur stack over flow
def fib_navie(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        fib = fib_navie(n - 1) + fib_navie(n - 2)
        return fib

timeit(fib_navie, 35)


fib_array = [0, 1]

def fib_recur_dp(n):
    if n < len(fib_array):
        return fib_array[n]
    else:
        fib = fib_recur_dp(n - 1) + fib_recur_dp(n - 2)
        fib_array.append(fib)
        return fib

timeit(fib_recur_dp, 35)

# Bottom to Top
def fib_dp(n):
    if n == 0:
        return 0;
    elif n == 1:
        return 1;
    
    fib_array = [0, 1]

    for i in range(2, n + 1):
        num = fib_array[i - 1] + fib_array[i - 2]
        fib_array.append(num)
    return fib_array[n]

timeit(fib_dp, 35)