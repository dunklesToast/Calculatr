let number = "";
let sum = 0;
let equation = "";
let {remote} = require('electron');
let main = remote.require('./main.js');
let solved = false;


function addNumber(nbr) {
    console.log('ADDING ' + nbr + ' TO EQUATION');
    number += nbr.toString();
    document.getElementById('sumText').innerHTML = number;
}

function addOperator(op) {
    console.log('ADDING ' + op + ' OPERATOR!');
    if (!solved) equation += number + op;
    else equation += op;
    document.getElementById('eq').innerHTML = equation;
    number = "";
    solved = false;
}

function solve() {
    if (!solved) {
        equation += document.getElementById('sumText').innerHTML;
        console.log(equation);
        document.getElementById('eq').innerHTML = equation + '=';
        sum = (Math.round((eval(equation) * 1000000)) / 1000000);
        document.getElementById('sumText').innerHTML = sum.toString();
        solved = true;
    }
}

function reset() {
    number = "";
    sum = 0;
    equation = "";
    document.getElementById('sumText').innerHTML = number;
    document.getElementById('eq').innerHTML = equation;
}

function copy() {
    document.getElementById('sumText').innerHTML = "Copied!";
    main.copy(sum);
    setTimeout(() => {
        document.getElementById('sumText').innerHTML = sum.toString();
    }, 1000)
}