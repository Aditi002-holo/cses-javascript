# Generate permutations using recursion
def Generate(permutation, elements, positions):
    
   if( len(permutation) == len(elements) ):

       for it in permutation:
          print(it, end=' ')
       print('\n')

   else:

       for i in range (0, len(elements)):

           if (positions[i]):
               continue

           # Set the position (taken), append the element
           positions[i] = True
           permutation.append(elements[i])

           Generate (permutation, elements, positions)
 
           # Remove the element, reset the position (available), 
           permutation.pop()
           positions[i] = False
           

elements = []
permutation = []
size = input("Size : ")
for i in range(0, int(size)):
   x = input("Element " + str(i) + " : ")
   elements.append(x)

positions = [False] * int(size)

print("\nPermutations\n")
Generate(permutation, elements, positions)