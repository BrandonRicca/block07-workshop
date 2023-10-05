/*
1. Create the string for the pop-up message
2. Assign first, second, and third with the result of the arithmetic calculations
3. Make a template literal to display the combination numbers
4. Make alert pop-up displaying the message and combo numbers
*/

// The message that will show in the pop-up window. It will display this string.

let message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// First variable means this is the first number in the vault combination. The var names corresponds with they position in the combination
// The numbers when calculated will equal the combo numbers
const first = 5 + 5; // equals to 10 
const second = 5 * 8; // equals to 40
const third = 84 - 45; // equals to 39

// The template literal will display the numbers with a dash between them
const combo = ` ${first} - ${second} - ${third}`;

// Display a dialog box displaying the message written at the start of the code and joins the combination  
alert(message + combo)