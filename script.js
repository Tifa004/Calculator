function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function operate(n1=0,operator,n2=0){
    switch(operator){
        case '+':
            return add(n1,n2);
            break;
        case '-':
            return subtract(n1,n2);
            break;
        case '*':
            return multiply(n1,n2);
            break;
        case '/':
            return n2==0?'Smartass':divide(n1,n2);
            break;
        default:
            return n1;
    }
}

function math (op){
    if(!(n2=='')){
        operator=op.textContent;
        n2='';
        flag=0;
    }
    else if(operator===''){
    operator=op.textContent;
    }else{
        n1=operate(parseInt(n1),operator,parseInt(n2));
        display.textContent=n1;
        operator=op.textContent;
        n2='';
    }
}

function mathkey (op){
    if(!(n2=='')){
        operator=op;
        n2='';
        flag=0;
    }
    else if(operator===''){
    operator=op;
    }else{
        n1=operate(parseInt(n1),op,parseInt(n2));
        display.textContent=n1;
        operator=op;
        n2='';
    }
}
let n1='';
let operator='';
let n2='';
let result='';
let flag=0;
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('#display');
const equals = document.querySelector('#btnEqual');
const clear = document.querySelector('#btnClear');
const sign = document.querySelector('#btnPlusMinus');
const percent = document.querySelector('#btnPercent')

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if(flag){
            n1=number.textContent=='.'?'0.':number.textContent;
            operator='';
            n2='';
            display.textContent=n1;
            flag=0;
        } 
        else if(operator===''){
            if(number.textContent=='.'&&n1.includes('.')){
                n1=n1;
            }else{
            n1+=number.textContent=='.'?'0.':number.textContent;
            }
            display.textContent=n1;
        }else{
            if(number.textContent=='.'&&n2.includes('.')){
                n2=n2;
            }else{
            n2+=number.textContent=='.'?'0.':number.textContent;
            }
            display.textContent=n2;
        }
    });
})

document.addEventListener('keydown',(key)=>{
    if(key.key==='Enter'){
        n1=String(operate(Number(n1),operator,Number(n2)));
        display.textContent=n1;
        flag=1;
    }else if (key.key==='-' || key.key==='/'||key.key==='*'||key.key==='+'){
        mathkey(key.key);
    }
    else if(key.key==='Backspace'){
        if(operator===''){
            n1=n1.length==1?'':n1.slice(0,n1.length-1)
            display.textContent=n1==''?0:n1;
        } else{
            n2=n2.length==1?'':n2.slice(0,n2.length-1)
            display.textContent=n2==''?0:n2;
        }
    }else if(!(/[0-9.]/.test(key.key))|| key.key.startsWith('F')){
        display.textContent='ERROR'
    } else{
    if(flag){
        n1=key.key=='.'?'0.':key.key;
        operator='';
        n2='';
        display.textContent=n1;
        flag=0;
    } 
    else if(operator===''){
        if(key.key=='.'&&n1.includes('.')){
            n1=n1;
        }else{
        n1+=!(n1.length==12)?key.key=='.'?'0.':key.key:'';
        }
        display.textContent=n1;
    }else{
        if(key.key=='.'&&n2.includes('.')){
            n2=n2;
        }else{
        n2+=!(n2.length==12)?key.key=='.'?'0.':key.key:'';
        }
        display.textContent=n2;
    }
}
});

operators.forEach((op)=>{
    op.addEventListener('click',()=>{
        math(op);
    });
});

clear.addEventListener('click',()=>{
    n1='';
    n2='';
    operator=''
    display.textContent=0;
})
equals.addEventListener('click',()=>{
    n1=String(Math.round(operate(Number(n1),operator,Number(n2))));
    display.textContent=n1;
    flag=1;
});

sign.addEventListener('click',()=>{
    if(!(n2=='')){
        if(!n1.startsWith('-')){
            n1='-'+n1;
        }else{
            n1=n1.slice(1)
        }
        display.textContent=n1;
        n2='';
        flag=0;
        operator='';
    }
    else if(operator===''){
        if(!n1.startsWith('-')){
            n1='-'+n1;
        }else{
            n1=n1.slice(1)
        }
        display.textContent=n1;
    }else{
        if(!n2.startsWith('-')){
            n2='-'+n2;
        }else{
            n2=n2.slice(1)
        }
        display.textContent=n2;
    }
})

percent.addEventListener('click',()=>{
    if(!(n2=='')){
        n1=String(parseInt(n1)/100);
        display.textContent=n1;
        operator='';
        n2='';
        flag=0;
    }
    else if(operator===''){
        n1=String(parseInt(n1)/100);
        display.textContent=n1;
    } else {
        n2=String(parseInt(n2)/100);
        display.textContent=n2;
    }
})