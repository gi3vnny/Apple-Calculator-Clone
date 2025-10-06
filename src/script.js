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