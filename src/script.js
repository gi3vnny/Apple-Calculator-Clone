//grabs all btns
const allBtns = document.querySelectorAll('input[type="button"]');
//grabs display
const display = document.getElementById('display');


//display.value will initially start at 0 
display.value = '0'; 

//click event for each btn
allBtns.forEach(displayBtn);

//btn logic for each click event
function displayBtn (item, index, arr) {
    item.addEventListener('click', () => {
        
        //equal btn logic
        if (item.value.toString() == '=')
        {
            //converts symbols into recognized operators in JavaScript
            let expression = display.value.replaceAll('×', '*').replaceAll('÷', '/').replaceAll('%', '/100');
            display.value = eval(expression);
        }   
        //ac btn logic
        else if (item.value.toString() == 'AC') {
            display.value = '0';
        } //+/- btn logic
        else if (item.value.toString() == '+/-') {
            if (display.value.charAt(0) === '-'){ 
                display.value = display.value.slice(1);
            } else {
                display.value = '-' + display.value;
            }
        }  else {
            if (display.value === '0' && isNumber(item.value)) {
                display.value = item.value;
            } else {
                display.value += item.value; 
            }
        }
       
    })
}


//function to determine if an input is a number 
function isNumber (value) {
    return !isNaN(value);
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
*/


