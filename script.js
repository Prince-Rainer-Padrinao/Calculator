let keys = document.querySelector('.keyArea')
let displayArea = document.querySelector('#textDisplay')
let operators = ['+', '-', '*', '/', '=', 'C']
let operators2 = /[+\-*/=C]/g

let currentOperator = ''
let firstValue = 0
let secondValue = 0
let result = 0

let dotButton = document.querySelector('#dotBtn')
function equals(operator){            
    switch (operator){
        case '+':            
            // equals(currentOperator)
            // result = firstValue + parseFloat(displayArea.value)
            currentOperator = operators[0]
            result = firstValue + (parseFloat(displayArea.value) || secondValue)
            break
        case '-':
            currentOperator = operators[1]
            // result = firstValue - parseFloat(displayArea.value)
            result = firstValue - (parseFloat(displayArea.value) || secondValue)
            break
        case '*':
            currentOperator = operators[2]
            // result = firstValue * parseFloat(displayArea.value)
            result = firstValue* (parseFloat(displayArea.value) || secondValue)
            break
        case '/':
            currentOperator = operators[3]
            if(parseFloat(displayArea.value) === 0 || secondValue === 0){
                try{}
                catch(error){
                    alert('invalid operation')
                }
            }
            result = firstValue / parseFloat(displayArea.value)
    }   
}

keys.addEventListener('click', (e)=>{

    if(e.target.tagName == 'BUTTON'){        
        if(operators.includes(e.target.textContent)){
            
            equals(e.target.textContent)
            // equals(currentOperator)
            switch (e.target.textContent){      
                         
                case '+':
                case '-':
                case '*':
                case '/':   
                    dotButton.disabled = false
                    break
                case 'C':                    
                    displayArea.value = ''
                    firstValue = 0
                    secondValue = 0
                    result = 0
                    currentOperator = ''
                    break;  
                case '=':
                    if(currentOperator != ''){
                        secondValue = displayArea.value
                        equals(currentOperator)
                        displayArea.value = result
                        firstValue = result
                        dotButton.disabled = false
                        currentOperator = ''
                    }else{
                        displayArea.textContent = ''
                    }                  
                    break
            }            
            
            if (e.target.textContent != 'C' && e.target.textContent!= '='){
                firstValue = parseFloat(displayArea.value)
                displayArea.value = e.target.textContent
            }
            
        }else if(operators.includes(displayArea.value)){
            displayArea.value = e.target.textContent
        }
        else{            
            displayArea.value += e.target.textContent            
            if(e.target.textContent == '.'){
                e.target.disabled = true
            }   
        }
        
        
    }
})