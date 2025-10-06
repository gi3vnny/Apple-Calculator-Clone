//grabs all btns
const allBtns = document.querySelectorAll('input[type="button"]');
//grabs display
const display = document.getElementById('display');

//click event for each btn
allBtns.forEach(displayBtn);
//btn logic for each click event
function displayBtn (item, index, arr) {

    item.addEventListener('click', () => {
        if (item.value.toString() == 'AC') {
            display.value = '';
        } else if (item.value.toString() == '=') {
            display.value = eval(display.value);
        }else {
             display.value += item.value;
        }
    })
}

/* 
                                MAIN CALC LOGIC
    'input[type="button"]'; == calls an index of buttons, which is > 1
    forEach button, we display the value in the display area. 
    
    Main Logic:
    
    if the user hits the '=' btn, program will perform operation thats on the screen

    if the user hits 'AC' btn, program will clear the entire display. 

    if the user hits the multiply SYMBOL or the divide SYMBOL, program will convert the X symbol => '*' OR program will convert divide symbol => /

    if the user hits a number && hits the '+/-' sign, it will toggle between a signed and a whole number. 

    if the user hits the '%' btn, the program will interpret the btn as a percentage & when it evaulates, it comes down to num / 100
*/


/* 
                            ADDITIONAL FEATURES 
    - the display, will be automatically set to 0.
    ** If the user doesn't type a number, and hits the operators [/, *, -, +], the display will show 0, and then the operator. **

    - while the user hits a btn != AC, AC btn will be converted to a backspace btn. backspace btn, removes one digit.

    - An iPhone template screen with similar dimensions will be input behind the screen w/ Z-Index. 
    - iPhone white bottom bar will be also implemented 
*/



/*                        FUTURE UPDATES
    - Convert the bottom AC btn to the calculator symbol. 
*/ 


