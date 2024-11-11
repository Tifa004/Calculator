function applyHoverStyles(element, bgColor, color) {
    element.style.backgroundColor = bgColor;
    element.style.color = color;
}

function revertStyles(element, bgColor, color) {
    element.style.backgroundColor = bgColor;
    element.style.color = color;
}

function setButtonStyles(button, defaultBg, defaultColor, hoverBg, hoverColor) {
    button.style.backgroundColor = defaultBg;
    button.style.color = defaultColor;
    
    button.addEventListener('mouseenter', () => applyHoverStyles(button, hoverBg, hoverColor));
    button.addEventListener('mouseleave', () => revertStyles(button, defaultBg, defaultColor));
}

// Apply dark mode styles
function applyDarkModeStyles() {
    body.style.backgroundColor = '#121A2F';
    calc.style.backgroundColor = '#1A237E';
    
    numbers.forEach((number) => {
        setButtonStyles(number, '#26C6DA', '#ECEFF1', '#4DD0E1', '#000000');
    });

    display.style.backgroundColor = '#2C2C34';
    display.style.color = '#E0F7FA';
    
    setButtonStyles(clear, '#5E35B1', '#FFFFFF', '#7E57C2', '#FFFFFF');
    operators.forEach((op) => {
        setButtonStyles(op, '#006064', '#E0F2F1', '#00796b', '#E0F2F1');
    });
    setButtonStyles(percent, '#006064', '#E0F2F1', '#00796b', '#E0F2F1');
    setButtonStyles(sign, '#006064', '#E0F2F1', '#00796b', '#E0F2F1');
    setButtonStyles(equals, '#006064', '#E0F2F1', '#00796b', '#E0F2F1');
}

// Apply light mode styles
function applyLightModeStyles() {
    body.style.backgroundColor = '#f0f4f8';
    calc.style.backgroundColor = '#e3f2fd';
    
    numbers.forEach((number) => {
        setButtonStyles(number, '#bbdefb', '#0d47a1', '#a0d4ff', '#0a3d91');
    });

    display.style.backgroundColor = 'white';
    display.style.color = 'black';
    
    setButtonStyles(clear, '#b2ebf2', '#00796b', '#A1e8e3', '#003d33');
    operators.forEach((op) => {
        setButtonStyles(op, '#90caf9', '#1e3a8a', '#a8e6cf', '#0a595c');
    });
    setButtonStyles(percent, '#90caf9', '#1e3a8a', '#a8e6cf', '#0a595c');
    setButtonStyles(sign, '#90caf9', '#1e3a8a', '#a8e6cf', '#0a595c');
    setButtonStyles(equals, '#90caf9', '#1e3a8a', '#a8e6cf', '#0a595c');
}

function handleThemeSwitch(n1) {
    if (n1 === 80085 && !darkmode) {
        // Dark mode styles
        applyDarkModeStyles();
        darkmode = 1;
    } else {
        // Light mode styles
        applyLightModeStyles();
        darkmode = 0;
    }
}

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

function operate(n1,operator,n2){
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
            handleThemeSwitch(n1);
            return n1;
            break;
    }
}

function math (op){
    if(!(n2=='0')){
        operator=op;
        n2='0';
        flag=0;
    }
    else if(operator===''){
    operator=op;
    }else{
        n1=operate(parseInt(n1),op,parseInt(n2));
        display.textContent=n1;
        operator=op;
        n2='0';
    }
}

function handlen1Input(number){
    if(number=='.'&&n1.includes('.')){
        n1=n1;
    }else{
        n1+=(n1=='0'&&number=='0')?'':!(n1.length==12)?number:'';
        if(n1.split('.')[0].length>1&&n1[0]=='0'){
            n1=n1.slice(1);
        }
    }
    display.textContent=n1;
}

function handlen2Input(number){
    if(number=='.'&&n2.includes('.')){
        n2=n2;
    }else{
        n2+=(n2=='0'&&number=='0')?'':!(n2.length==12)?number:'';
        if(n2.split('.')[0].length>1&&n2[0]=='0'){
            n2=n2.slice(1);
        }
    }
    display.textContent=n2;
}

function handleEqual(){
    x=operate(Number(n1),operator,Number(n2))
    n1=x=='Smartass'?x:String(x).includes('e')?x.toPrecision(4):x.toPrecision(11);
    n1=String(n1).includes('e')?x.toPrecision(4):x.toPrecision(11);
    n1=String(n1).includes('e')?n1:String(Number(n1))
    display.textContent=n1;
    flag=1;
}

function handleBackspaceKey(){
    if(flag){
        n1='0';
        n2='0';
        operator='';
        flag=0;
        display.textContent=n1;
    }else if(operator===''){
        n1=n1.slice(0,-1);
        if(n1==''){
            n1='0';
        }
        display.textContent=n1;
    }else{
        n2=n2.slice(0,-1);
        if(n2==''){
            n2='0';
        }
        display.textContent=n2;
    }
}

let n1='0';
let operator='';
let n2='0';
let result='';
let flag=0;
let darkmode=0;
const body      = document.querySelector('body')
const numbers   = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const display   = document.querySelector('#display');
const equals    = document.querySelector('#btnEqual');
const clear     = document.querySelector('#btnClear');
const sign      = document.querySelector('#btnPlusMinus');
const percent   = document.querySelector('#btnPercent');
const calc      = document.querySelector('.calculator');

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if(flag){
            n1=number.textContent=='.'?'0.':number.textContent;
            operator='';
            n2='0';
            display.textContent=n1;
            flag=0;
        } else if(operator === ''){
            handlen1Input(number.textContent);
        }else{
            handlen2Input(number.textContent);
        }
    });
});

document.addEventListener('keydown',(key)=>{
    if(key.key==='Enter'){
        handleEqual();
    }else if (key.key==='-' || key.key==='/'||key.key==='*'||key.key==='+'){
        math(key.key);
    }
    else if(key.key==='Backspace'){
        handleBackspaceKey();
    }else if(!(/[0-9.]/.test(key.key))|| key.key.startsWith('F')){
        display.textContent='ERROR';
    }else{
        if(flag){
            n1=key.key=='.'?'0.':key.key;
            operator='';
            n2='0';
            display.textContent=n1;
            flag=0;
        }else if(operator===''){
            handlen1Input(key.key);
        }else{
            handlen2Input(key.key);
        }
    }
});

operators.forEach((op)=>{
    op.addEventListener('click',()=>{
        math(op.textContent);
    });
});

clear.addEventListener('click',()=>{
    n1='0';
    n2='0';
    operator=''
    flag=0;
    display.textContent=0;
});

equals.addEventListener('click',()=>handleEqual());

sign.addEventListener('click',()=>{
    if(!(n2=='')){
        if(!n1.startsWith('-')){
            n1='-'+n1;
        }else{
            n1=n1.slice(1);
        }
        display.textContent=n1;
        n2='0';
        flag=0;
        operator='';
    }
    else if(operator===''){
        if(!n1.startsWith('-')){
            n1='-'+n1;
        }else{
            n1=n1.slice(1);
        }
        display.textContent=n1;
    }else{
        if(!n2.startsWith('-')){
            n2='-'+n2;
        }else{
            n2=n2.slice(1);
        }
        display.textContent=n2;
    }
});

percent.addEventListener('click',()=>{
    if(!(n2=='0')){
        n1=String(parseFloat(n1)/100);
        display.textContent=n1;
        operator='';
        n2='0';
        flag=0;
    }
    else if(operator===''){
        n1=String((parseFloat(n1)/100).toPrecision(4));
        n1=String(Number(n1))
        display.textContent=n1;
    } else {
        n2=String((parseFloat(n2)/100).toPrecision(4));
        n2=String(Number(n2))
        display.textContent=n2;
    }
});