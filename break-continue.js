// use of break and continue keyword
let numbers = [1,2,3,4,-5,6,-7,8,-9,10];

for(let i = 0; i<numbers.length; i++){
    console.log(numbers[i]);
    if(numbers[i] == 5){
        break;
    }
}
for(let i = 0; i<numbers.length; i++){
    
    if(numbers[i] < 0){
        continue;
        
    }
    console.log(numbers[i]);
}
