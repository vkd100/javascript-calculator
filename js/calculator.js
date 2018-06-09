var expression="";
var character="";

function add(character) {
expression = expression + character;
document.getElementById("display").value = expression;
}

function compute() {
document.getElementById("display").value = eval(expression);
}

function clearDisplay() {
expression = "";
document.getElementById("display").value = "0";
}

function help() {
    alert('Search on Google');
}
function plusminus() {
    expression = eval(expression)*-1;
    expression = expression.toString();
    document.getElementById("display").value = expression;
}
function sqrt() {
    expression = eval(expression);
    document.getElementById("display").value = Math.sqrt(expression);
    expression = Math.sqrt(expression);
    expression = expression.toString();
}
function log() {
    expression = eval(expression);
    document.getElementById("display").value = Math.log(expression);
    expression = Math.sqrt(expression);
    expression = expression.toString();
}
function xx() {
    expression = 1/expression;
    document.getElementById("display").value = eval(expression);
}
function CE() {
    expression = expression.slice(0,-1);
    if(expression == "") {
        expression = "0";
    }
    document.getElementById("display").value = expression;
}