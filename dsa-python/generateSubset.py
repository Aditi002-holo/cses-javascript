def generateSubset (R) :
    if (R > N) : 
        # Process the subset
        print("[ "+' '.join ( map (str,subset) ) + " ]")
    else :
        # Generate subset with R
        subset.append(R)
        generateSubset (R + 1)

        # Generate subset without R
        subset.pop()
        generateSubset (R + 1)

# Generating subsets / combinations using recursion.
R = 1 
subset = []

N = 2 
print("Subsets for set 2: ")
generateSubset (R) 