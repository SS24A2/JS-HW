//ZADACA 1 - a+b
const globalNum=10;
function checkScope(){
    const localNum=10;
    console.log(globalNum);
    console.log(globalNum===localNum); //za check deka ova e mozno samo vo ramki na funkcijata
}
checkScope(globalNum)
//console.log(globalNum===localNum)
//vo konzolata se dobiva sledno - ReferenceError: localNum is not defined (localNum ne ja prepoznava koga ja povikuvame nadvor od funkcijata)

//ZADACA 1 - v 
if(true){
    let blockNum=10;
    console.log(typeof blockNum); //za check deka ova e mozno samo vo ramki na if uslovot 
}
//console.log(typeof blockNum)
//vo konzolata se dobiva: undefined (blockNum ne ja prepoznava koga ja povikuvame nadvor od if uslovot)


//ZADACA 2-a
let score=78; 
if (score>=90 && score<=100){
    console.log("Grade:A");
} else if (score>=80 && score<=89){
    console.log("Grade:B");
} else if (score>=70 && score<=79){
    console.log("Grade:C");
} else if (score>=60 && score<=69){
    console.log("Grade:D");
} else if (score>=0 && score<=59){
    console.log("Grade:F");
} else if (score<0 || score>100){
    console.log("Invalid score! Please enter a score between 0 and 100");
} else {
    console.log("Invalid entry! Please enter a numerical value");
}

//ZADACA 2-b
let dayNumber=5;
switch (dayNumber){
    case 1:
    console.log("The day is Sunday");
    break;
    case 2:
    console.log("The day is Monday");
    break;
    case 3:
    console.log("The day is Tuesday");
    break;
    case 4:
    console.log("The day is Wednesday");
    break;
    case 5:
    console.log("The day is Thursday");
    break;
    case 6:
    console.log("The day is Friday");
    break;
    case 7:
    console.log("The day is Saturday");
    break;
    default:
    console.log("Invalid day number. Please enter a number between 1 and 7");   
}


//ZADACA 3
function sum(num1,num2,num3){
    return num1+num2+num3
}
function print(text){
    return text
}
function numCompare(num1,num2){
    if (num1===num2){
        console.log("These numbers are equal")
    } else if (typeof num1==="number" && typeof num2==="number" && num1!=num2){
        console.log("These numbers are not equal") 
    } else {
        console.log("Invalid function argument") 
    }
}

console.log(sum(15,0.3,1/2))
console.log(print("Today is Friday")) 
numCompare(112,112)
numCompare(112,"112")
numCompare(112,12)
numCompare(112,100+12)


//ZADACA 4 - a
let age=32;
if (age>=21){
    console.log("You can vote. You can legally buy alcohol")
} else if (age>=18){
    console.log("You can vote. You can't legally buy alcohol")
} else if (age<18 && age>0){
    console.log("You can't vote. You can't legally buy alcohol")
} else {
    console.log("Invalid age entry") 
}

//ZADACA 4 - b
function monthDays(month){
    switch (month){
        case "January":
        return 31;
        break;
        case "February":
        return 28;
        break;
        case "March":
        return 31;
        break;
        case "April":
        return 30;
        break;
        case "May":
        return 31;
        break;
        case "June":
        return 30;
        break;
        case "July":
        return 31;
        break;
        case "August":
        return 31;
        break;
        case "September":
        return 30;
        break;
        case "October":
        return 31;
        break;
        case "November":
        return 30;
        break;
        case "December":
        return 31;
        break;
        default:
        return "invalid input"
    }
}

console.log(monthDays("May"))

//ZADACA 4-v
let temperature=17;
if (temperature>30){
    console.log("The weather is hot")
} else if (temperature>20){
    console.log("The weather is warm")
} else if (temperature>=15){
    console.log("The weather is moderate")
} else if (typeof temperature ==="number" && temperature<15){
    console.log("The weather is cold")
} else {
    console.log("Invalid temperature entry")
}


//ZADACA 5

function modulus (number){
    if (number%3===0 && number%5!==0){
        console.log("Fizz")
    } else if (number%5===0 && number%3!==0){
        console.log("Buzz")
    } else if (number%5===0 && number%3===0){
        console.log("FizzBuzz")
    } else {
        console.log(number) 
    }
}

modulus(15)
modulus(33)
modulus(20)
modulus(13)
