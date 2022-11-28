'use strict';

// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// console.log(pow(2, 1)); // 2 
// console.log(pow(2, 2)); // 4 
// console.log(pow(2, 3)); // 8 
// console.log(pow(2, 4)); // 16 


// function pow(x, n) {
//     if (n == 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// console.log(pow(2, 1)); // 2 
// console.log(pow(2, 2)); // 4 
// console.log(pow(2, 3)); // 8 
// console.log(pow(2, 4)); // 16 
// console.log(pow(2, 5)); // 16 


let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic:[{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],
        pro:[{
            name: 'Sam',
            progress: 10
        }],
        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        } 
        }
};

// 1)
function getTotalProgressByIteration (data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)){
            students += course.length;
            
        for(let i = 0; i < course.length; i++){
            total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for(let i = 0; i < subCourse.length; i++){
                    total += subCourse[i].progress;
                }
            }
        }
    }
    return total / students;
} 
// // console.log(getTotalProgressByIteration(students));


// // 2)
function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)){
        let total = 0;
        
    for(let i = 0; i < data.length; i++){
        total += data[i].progress;
        }
        return [total, data.length];
    } else {
        let total = [0, 0];
        for (let subData of Object.values(data)){
            const subDataArray = getTotalProgressByRecursion(subData);
            total[0] += subDataArray[0]; 
            total[1] += subDataArray[1]; 
        }
        return total;
    }
}
const result = getTotalProgressByRecursion(students);
console.log(result[0]/result[1]);


// Пример для Object.values()

// let person = {
//     name: 'Davron',
//     age: 35,
//     weight: 67,
//     height: 178
// };

// console.log(Object.values(person));


// Объявление функции(Function Declaration)
// Рекурсия

// function getSum(numOne, numTwo) {
//     let result = 1;
//     //умножаем result на numOne numTwo раз в цикле
//     for(let i = 0; i < numTwo; i++) {
//         result *= numOne;
//     }  
//     return result;
// }

// console.log(getSum(2, 3));

// function getSum(numOne, numTwo) {
//     if (numTwo == 1) {
//         return numOne;
//     } else {
//         return numOne * getSum(numOne, numTwo - 1);
//     }
// }
// console.log(getSum(2, 3));

let count = 0;
function recursion() {
    if (count === 5) {
        return 'Done'; 
    }
    count++;
    return recursion();
}

console.log(recursion());

let number = Math.pow(3, 5);
console.log(number);

function pow(x, y) {
    if (y === 0) {
        return 1;
    } else {
        return x * pow(x, y - 1);
    }
}

console.log(pow(2, 2));
console.log(pow(2, 3));
console.log(pow(2, 4));
console.log(pow(3, 2));






