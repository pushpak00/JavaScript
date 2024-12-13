// Translate border-left-width to borderLeftWidth
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

function camelize(str){

    let arr = str.split('-');
   // alert(arr);
    let word = arr.map( (item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1) );
   // alert(word);
    let result = word.join('');

    return result;

}

alert( camelize("background-color") );
alert( camelize("list-style-image") );
alert( camelize("-webkit-transition") );