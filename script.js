/*HOMEWORK Class 01

Exercise 1
 Филтрирање на дадена низа по даден параметар */

 let results = [23, 44, 33, 26, 77, 7, 3, 2];

 let filtered =[];

 for(let i = 0; i < results.length; i++) {
   if (results[i]> 20) {
    filtered.push(results[i]);
   }
 };


 /*
 
 Exercise 2 
 Сортирање на дадена низа по даден параметар*/

 let numbers = [2,6, 3, 1, 4, 6, 88, 66, 54, 3];

 for(let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
    if(numbers[i] > numbers[j]) {
        let temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
    }
 }
}
console.log(numbers);



/*
Exercise 3
Сумирање на параметри од дадена низа - reduce */


let suma = [2, 4, 66, 44, 89, 55, 83, 2];
let sum = suma.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
} , 0);
console.log(sum);


/*
Exercise 4
Пронаоѓање на член од дадена низа */

let findNumber = [2, 4, 6, 7, 3, 9];
let target = 7;

for (let i =0; i < findNumber.length; i++) {
    if (findNumber[i] === target) {
        console.log("target found", i);
        break;
    }
}




* Бонус: Што значи тоа, функциите се "first-class-citizens" во JavaScript?