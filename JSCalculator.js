var result = 0;
var resultString = '';
var resultList = [];
var isFirst = true;
var firstNumber = 0;
var secondNumber = 0;
var operator = 'none';

function main() {
    displayResults()
    $('#output')[0].innerHTML = result;

    $('#debug').click(function() {
        var element = $('#debug')[0];
        if (element.value === 'Switch to normal mode') {
            element.value = 'Switch to debug mode';
        } else {
            element.value = ('Switch to normal mode');
        }
        $('.debugMode').toggle();
    });

    $('.numberButton').on('click', function() {
        handleClickedNumber(this.id);
    });

    $('#decimalPoint').on('click', function() {
        if (resultList[resultList.length-1] !== '.') {
            resultList.push('.');
            resultString = addItemToString('.');
        }
        displayResults(resultString);
    });

    $('#C').on('click', function() {
        result = 0;
        resultString = '';
        resultList = [];
        displayResults(result);
    });

    $('#add').on('click', function() {
        handleOperator('add', '+');
    });

    $('#substract').on('click', function() {
        handleOperator('substract', '-');
    });

    $('#multiply').on('click', function() {
        handleOperator('multiply', '*');
    });

    $('#divide').on('click', function() {
        handleOperator('divide', '/');
    });

    $('#modulus').on('click', function() {
        handleOperator('modulus', '%');
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
        operator = 'none';
        resultString = ''
        displayResults(result);
    });
}

function addItemToString(item) {
    return resultString.concat(item);
}

function getNumberFromList(list) {
    var numberFromList = 0;
    decimalPointPlace = 0;
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
    $('#result')[0].innerHTML = 'result: ' + result;
    $('#resultString')[0].innerHTML = 'resultString: ' + resultString;
    $('#resultList')[0].innerHTML = 'resultList: ' + resultList;
    $('#firstNumber')[0].innerHTML = 'first number: ' + firstNumber;
    $('#secondNumber')[0].innerHTML = 'second number: ' + secondNumber;
    $('#operator')[0].innerHTML = 'operator: ' + operator;
    $('#output')[0].innerHTML = itemToDisplay;
}

function handleOperator(clickedOperatorWord, clickedOperatorSign) {
    if (operator !== 'none') {
        operator = clickedOperatorWord;
        resultString = resultString.slice(0, -1);
    } else {
        firstNumber = getNumberFromList(resultList);
        isFirst = false;
        operator = clickedOperatorWord;
    }
    resultList = [];
    resultString = addItemToString(clickedOperatorSign);
    displayResults(resultString);
}

function handleClickedNumber(clickedNumber) {
    resultList.push(clickedNumber);
    resultString = addItemToString(clickedNumber);
    displayResults(resultString);
}

$(document).ready(main);
