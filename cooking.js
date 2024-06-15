function extractAndCapitalizeWords(stringOfFruits) {
    var fruits = stringOfFruits.split(/[ ,;]+/);
    //.map() will create the new array 'caps'  by adding elements returned from the provide function
    var caps = fruits.map(function(fruit) {
        //capitalizes the character at index 0 and then returns the rest of the characters as they are from index 1
        return fruit.charAt(0).toUpperCase() + fruit.slice(1);
    });
     return caps;
}

var newArray = extractAndCapitalizeWords("apple,banana,cherry grape");
console.log(newArray);
