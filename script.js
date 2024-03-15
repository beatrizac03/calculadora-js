let displayResultado = document.querySelector('.c-inumb')
let expression = ''
let resultBtn = document.querySelector('#resultsign')
let clearSign = document.querySelector('.clearsignal')
let digit = document.querySelectorAll('.digit')

// FUNCTIONS

function insert(dnumb){
    displayResultado.style.fontSize = '55px';
    displayResultado.innerHTML += dnumb
    expression += dnumb
}

function calculate(){
    expression = expression.replace(/x/g, '*'); 
    // eval does not identify 'x' as multiply, so we replace all the occurrances to '*'

    displayResultado.innerHTML = ''
    displayResultado.innerHTML = eval(expression)
}

function clear(){
    expression = ''
    displayResultado.innerHTML = ''
}

// 
digit.forEach((digitnumb) => {
    digitnumb.addEventListener('click', function(){
        insert(digitnumb.textContent)
    })
})

resultBtn.addEventListener('click', function(){
    calculate()
})

clearSign.addEventListener('click', function(){
    clear()
})
