// use of closer function 

function stopWatch(){
    let num = 0;
    return function(){
        num++;
        return num 
    }
}
const clock1 =stopWatch();
console.log(clock1())
console.log(clock1())
console.log(clock1())
console.log(clock1())
const clock2 =stopWatch();
console.log(clock2())