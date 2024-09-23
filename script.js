const userInput1 = +prompt("Введите число")
const userInput2 = +prompt("Введите еще число")

// function isPositive(number) {
//     if (number > 0) {
//         return "Положительное"
//     } else if (number < 0) {
//         return "Отрицательное"
//     } else if (number === 0) {
//         return "Ноль"
//     } else {
//         return "Введено некорректное число"
//     }
// }


// function isValidAge(age) {
//     if(age <= 120 && age >= 0) {
//         return "Возраст корректный"
//     } 
//     return "Возрастный некорректный"
// }


// function getModule(number) {
//     if (number >= 0) {
//         return number
//     } else if (number < 0) {
//         return -number
//     } else {
//         return "Некорретный ввод"
//     }
// }


// function getGreater(num1, num2) {
//     return num1 >= num2 ? num1 : num2
// }

// function isKratno5(number) {
//     return number % 5 ? "Не кратно" : "Кратно"

//     if (number % 5 !== 0) {
//         return "Не кратно"
//     } else if (number % 5 === 0) {
//         return "Кратно"
//     }
// }

// function isEarth(planet) {
//     planet = planet.toLowerCase()

//     return planet === 'земля' ? 'Привет, землянин!' : 'Привет, инопланетянин!'
// }

// function getLess(num1, num2) {
//     return num1 <= num2 ? num1 : num2
// }


// function pow(num, p) {
//     let result = 1
//     while(p) {
//         p--
//         result = result * num
//     }
//     return result
// }

// function calculate(num1, num2, operator) {
//     switch(operator) {
//         case '+':
//             return num1 + num2
//         case '-':
//             return num1 - num2
//         case '*':
//             return num1 * num2
//         case '/':
//             return num1 / num2
//         default:
//             return "Будьте внимательнее!"
//     }
// }

// function mod(num1, num2) {
//     if (num1 < num2) {
//         return num1
//     } else if (num1 === num2) {
//         return 0
//     } else {
//         let result = num2
//         while (result <= num1) {
//             result += num2
//         }           
//         return num1 - (result - num2)
//     }
// }

alert(mod(userInput1, userInput2))