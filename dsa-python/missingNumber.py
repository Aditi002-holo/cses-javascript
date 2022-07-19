def missingNumber(n, l):
    # sort the list
    l.sort()

    for x in range(1,n+1):
        # return last number, if missing
        if(x == n):
            return n
        # else check for missing number
        elif(l[x-1] == x):
            continue
        else:
            return x


if __name__ == "__main__":
    # arr = []
    n = int(input(''))
    # take space separated inputs
    arr = input().split()
    for i in range(0,n-1):
        arr[i] = int(arr[i])

print(missingNumber(n, arr))