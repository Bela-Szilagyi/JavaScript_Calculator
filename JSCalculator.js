var result = 0;
var resultString = '';
var resultList = [];
var isFirst = true;
var firstNumber = 0;
var secondNumber = 0;
var operator = '';

function main() {
    displayResults()
    document.getElementById('output').innerHTML = result;
    $('#0').on('click', function() {
        resultList.push('0');
        resultString = addItemToString('0');
        displayResults();
    });

    $('#1').on('click', function() {
        resultList.push('1');
        resultString = addItemToString('1');
        displayResults();
   });

    $('#2').on('click', function() {
        resultList.push('2');
        resultString = addItemToString('2');
        displayResults();
    });

    $('#3').on('click', function() {
        resultList.push('3');
        resultString = addItemToString('3');
        displayResults();
    });

    $('#4').on('click', function() {
        resultList.push('4');
        resultString = addItemToString('4');
        displayResults();
    });

    $('#5').on('click', function() {
        resultList.push('5');
        resultString = addItemToString('5');
        displayResults();
    });

    $('#6').on('click', function() {
        resultList.push('6');
        resultString = addItemToString('6');
        displayResults();
    });

    $('#7').on('click', function() {
        resultList.push('7');
        resultString = addItemToString('7');
        displayResults();
    });

    $('#8').on('click', function() {
        resultList.push('8');
        resultString = addItemToString('8');
        displayResults();
    });

    $('#9').on('click', function() {
        resultList.push('9');
        resultString = addItemToString('9');
        displayResults();
    });

    $('#decimalPoint').on('click', function() {
        resultList.push('.');
        resultString = addItemToString('.');
        displayResults();
    });

    $('#C').on('click', function() {
        result = 0;
        resultString = '';
        resultList = [];
        displayResults();
    });

    $('#add').on('click', function() {
        resultString = addItemToString('+');
        firstNumber = getNumberFromList(resultList);
        resultList = [];
        isFirst = false;
        operator = 'add';
        displayResults();
    });

    $('#substract').on('click', function() {
        resultString = addItemToString('-');
        firstNumber = getNumberFromList(resultList);
        resultList = [];
        isFirst = false;
        operator = 'substract';
        displayResults();
    });

    $('#multiply').on('click', function() {
        resultString = addItemToString('*');
        firstNumber = getNumberFromList(resultList);
        resultList = [];
        isFirst = false;
        operator = 'multiply';
        displayResults();
    });

    $('#divide').on('click', function() {
        resultString = addItemToString('/');
        firstNumber = getNumberFromList(resultList);
        resultList = [];
        isFirst = false;
        operator = 'divide';
        displayResults();
    });

    $('#modulus').on('click', function() {
        resultString = addItemToString('%');
        firstNumber = getNumberFromList(resultList);
        resultList = [];
        isFirst = false;
        operator = 'modulus';
        displayResults();
    });

    $('#equals').on('click', function() {
        resultString = addItemToString('=');
        secondNumber = getNumberFromList(resultList);
        resultList = [];
        isFirst = true;
        switch(operator) {
            case 'add':
                result = firstNumber + secondNumber;
                break;
            case 'substract':
                result = firstNumber - secondNumber;
                break;
            case 'multiply':
                result = firstNumber * secondNumber;
                break;
            case 'divide':
                if (secondNumber !== 0) {
                    result = firstNumber / secondNumber;
                } else {
                    resultString = 'Division by zero error!';
                }
                break;
            case 'modulus':
                result = firstNumber % secondNumber;
                break;
        }
        firstNumber = 0;
        secondNumber = 0;    
        displayResults();
    });
}

function addItemToString(item) {
    return resultString.concat(item);
}

function getNumberFromList(list) {
    var numberFromList = 0;
    decimalPointPlace = list.length - list.indexOf('.') - 1;
    list.splice(list.indexOf('.'), 1);
    for (i = 0; i < list.length; i++) {
        numberFromList = numberFromList + list[i] * Math.pow(10, list.length-i-1);
    }
    numberFromList = numberFromList / Math.pow(10, decimalPointPlace);
    return numberFromList;
}

function displayResults() {
    document.getElementById('result').innerHTML = 'result: ' + result;
    document.getElementById('resultString').innerHTML = 'resultString: ' + resultString;
    document.getElementById('resultList').innerHTML = 'resultList: ' + resultList;
    document.getElementById('firstNumber').innerHTML = 'first number: ' + firstNumber;
    document.getElementById('secondNumber').innerHTML = 'second number: ' + secondNumber;
    document.getElementById('operator').innerHTML = 'operator: ' + operator;
    document.getElementById('output').innerHTML = resultString;
}

$(document).ready(main);