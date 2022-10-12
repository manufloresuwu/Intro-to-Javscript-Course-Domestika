# Exercise 6

## What did we have to do?

In this unit (6) we had to:
1. Create a levels variable and assign it an array that contain the game levels, grouped into separate {} objects
by commas.
2. For each object (or "level"), assign the properties of cards and movementsMax.
3. Assigns one or more values ​​from the array of groupCards to the cards of each level.
4. Modify and extend the levels. You can convert the "leftover" moves from each level in the final score from the player.

## How did we solve it?
To solve this exercises we:
- Add to "variables-globales.js" the var "niveles"in which we put two objects for the cards and the movements as required in the exercises 1 and 2.
- Concat more arrays to the objects already made in exercise 1 and 2.

To solve the BONUS (exercise 4):
1. In the "variables-globales.js" file, set the variable "puntos" with a value of 0.
2. In the index.html file, add in the header, next to the move counter, a score counter.
3. In the "acierto-error.js" file, inside the "acierto()" function I increased the score by 1 for each hit, which also updates the innerText of the corresponding selector.
4. In the "descubrir-comparar.js" file, after evaluating that the pending cards are 0, it is evaluated if the number of moves made is less than the maximum number of moves for the level, if this is the case, the remaining moves are added to the score (the score is maintained from one level to another).
5. Finally, in the "iniciar.js" file inside the "reiniciar()" function, the punctuation value returns to 0, as does the innerText of the corresponding selector.