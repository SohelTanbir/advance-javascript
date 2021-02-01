// use of map(), filter() and find()
let numbers = [1,2,4,6,8,9];

map()
let result = numbers.map(function(element, index, Array){
    console.log(element,index, Array);
    return element
});
console.log(result);

filter()
let result = numbers.filter(function(number){
    return number;
})
console.log(result)
let result = numbers.filter(x=> x >6);
console.log(result)

use of find()

var result = numbers.find(x => x > 5);
console.log(result);