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

    $('#debug').click(function() {
        var element = document.getElementById('debug');
        if (element.value === 'Normal mode') {
            element.value = 'Debug mode';
        } else {
            element.value = ('Normal mode');
        }
        $('.debugMode').toggle();
    });

    $('#0').on('click', function() {
        resultList.push('0');
        resultString = addItemToString('0');
        displayResults(resultString);
    });

    $('#1').on('click', function() {
        resultList.push('1');
        resultString = addItemToString('1');
        displayResults(resultString);
   });

    $('#2').on('click', function() {
        resultList.push('2');
        resultString = addItemToString('2');
        displayResults(resultString);
    });

    $('#3').on('click', function() {
        resultList.push('3');
        resultString = addItemToString('3');
        displayResults(resultString);
    });

    $('#4').on('click', function() {
        resultList.push('4');
        resultString = addItemToString('4');
        displayResults(resultString);
    });

    $('#5').on('click', function() {
        resultList.push('5');
        resultString = addItemToString('5');
        displayResults(resultString);
    });

    $('#6').on('click', function() {
        resultList.push('6');
        resultString = addItemToString('6');
        displayResults(resultString);
    });

    $('#7').on('click', function() {
        resultList.push('7');
        resultString = addItemToString('7');
        displayResults(resultString);
    });

    $('#8').on('click', function() {
        resultList.push('8');
        resultString = addItemToString('8');
        displayResults(resultString);
    });

    $('#9').on('click', function() {
        resultList.push('9');
        resultString = addItemToString('9');
        displayResults(resultString);
    });

    $('#decimalPoint').on('click', function() {
        resultList.push('.');
        resultString = addItemToString('.');
        displayResults(resultString);
    });

    $('#C').on('click', function() {
        result = 0;
        resultString = '';
        resultList = [];
        displayResults(result);
    });

    $('#add').on('click', function() {
        resultString = addItemToString('+');
        firstNumber = getNumberFromList(resultList);
        resultList = [];
        isFirst = false;
        operator = 'add';
        displayResults(resultString);
    });

    $('#substract').on('click', function() {
        resultString = addItemToString('-');
        firstNumber = getNumberFromList(resultList);
        resultList = [];
        isFirst = false;
        operator = 'substract';
        displayResults(resultString);
    });

    $('#multiply').on('click', function() {
        resultString = addItemToString('*');
        firstNumber = getNumberFromList(resultList);
        resultList = [];
        isFirst = false;
        operator = 'multiply';
        displayResults(resultString);
    });

    $('#divide').on('click', function() {
        resultString = addItemToString('/');
        firstNumber = getNumberFromList(resultList);
        resultList = [];
        isFirst = false;
        operator = 'divide';
        displayResults(resultString);
    });

    $('#modulus').on('click', function() {
        resultString = addItemToString('%');
        firstNumber = getNumberFromList(resultList);
        resultList = [];
        isFirst = false;
        operator = 'modulus';
        displayResults(resultString);
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
                    alert(resultString);
                }
                break;
            case 'modulus':
                result = firstNumber % secondNumber;
                break;
        }
        firstNumber = 0;
        secondNumber = 0;
        displayResults(result);
    });
}

function addItemToString(item) {
    return resultString.concat(item);
}

function getNumberFromList(list) {
    var numberFromList = 0;
    decimalPointPlace = 0;;
    if (list.indexOf('.') !== -1) {
        decimalPointPlace = list.length - list.indexOf('.') - 1;
        list.splice(list.indexOf('.'), 1);
    }
    for (i = 0; i < list.length; i++) {
        numberFromList = numberFromList + list[i] * Math.pow(10, list.length-i-1);
    }
    numberFromList = numberFromList / Math.pow(10, decimalPointPlace);
    return numberFromList;
}

function displayResults(itemToDisplay) {
    document.getElementById('result').innerHTML = 'result: ' + result;
    document.getElementById('resultString').innerHTML = 'resultString: ' + resultString;
    document.getElementById('resultList').innerHTML = 'resultList: ' + resultList;
    document.getElementById('firstNumber').innerHTML = 'first number: ' + firstNumber;
    document.getElementById('secondNumber').innerHTML = 'second number: ' + secondNumber;
    document.getElementById('operator').innerHTML = 'operator: ' + operator;
    document.getElementById('output').innerHTML = itemToDisplay;
}

$(document).ready(main);