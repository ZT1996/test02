'use strict';

function thousands_separators(num) {
    var part = '';
    
    num = num.toString();
    if (num.indexOf('.') != -1) {
        part = '.' + num.split('.')[1];
        num = parseInt(num.split('.')[0]);
    }
    var array = num.toString().split('');
    var index = -3;
    while (array.length + index > 0) {
        array.splice(index, 0, ',');
        index -= 4;
    }
    return array.join('') + part;
}

module.exports = thousands_separators;
