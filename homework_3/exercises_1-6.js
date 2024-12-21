//zadaca 1
const book={
    title: "Orbital", 
    author: "Samantha Harvey", 
    details: {
        publicationDate: "October 29, 2024",
        language: "English", 
        pages: 224, 
    }
}

const car={
    performance: "169 Horsepower", 
    drivetrain: "FWD or AWD", 
    grades: ["L", "LE", "XLE", "Hybrid S", "Hybrid Nightshade", "Hybrid XSE"],
    colors: ["Red Crystal", "Jet Black", "Sonic Silver", "Celestite", "Cypress"], 
}

const student={
    studentsGroup: "4th", 
    professor: "Peter Smith",
    names: ["Kate", "Jane", "Veronica", "Emily"], 
    subjects: ["math", "literature", "science"],
    results: {
        grade:["A", "B", "C", "D", "F"],
        completedProjects: [0, 1, 2, 3]
    }
}

//console.log(book.title)
//console.log(book.details.pages)

//console.log(car.drivetrain)
//console.log(car.grades[2])

//console.log(student.professor)
//console.log(student.subjects[1])
//console.log(student.results.grade[3])

//zadaca 2

//A
for (let i=0; i<=10; i++){
    console.log(i);
}

//B
let start=7;
let end=13;
let sum=0;
for (let i=start; i<=end; i++){ 
    if (i%2===0) {
      sum+=i;  
    };
}
console.log(sum);

//C
const person = {
    name: "Ana",
    age: 32,
    city: "Gostivar",
}

for (let key in person){
    console.log(`${key}: ${person[key]}`);
}

//D
const colors = ["orange", "red", "pink", "green", "blue", "grey"];
for (let color of colors){
    console.log(color.length, color);
}

//zadaca 3
let count=5;
while (count>=1) {
    console.log(count);
    count--;
}

let startNum=10;
do {
    console.log(startNum);
    if (startNum === 5) {
        break; 
    }
    startNum--   
} while (startNum>=1)

//zadaca 4
const students=[
    {
    name: "Marco",
    surname: "Jones",
    age: 21,
    adress: {
        city: "New York",
        street: {
            name: "Wellington Street",
            number:852,
        },
        zipCode: "10010"
    }       
    },
    {
    name: "Lora",
    surname: "James",
    age: 25,
    adress: {
        city: "Los Angeles",
        street: {
            name: "Arcadia Street",
            number:70,
        },
        zipCode: "11368"
    }       
    },
    {
    name: "Patrick",
    surname: "Davis",
    age: 18,
    adress: {
        city: "Austin",
        street: {
            name: "Pacific Drive",
            number:8,
        },
        zipCode: "13760"
    }       
    }
]
console.log(students[0].adress.city)
console.log(students[1]['adress']['street']['name'])

//zadaca 5
for (let i=3; i<=100; i=i+4){
    console.log(i);
}

for (let i=2; i<=50; i=i+2){
    console.log(i);
}

//zadaca 6
const cities=["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia", "Phoenix", "San Antonio", "San Diego", "Dallas", "San Jose"]
for (let index in cities){
    console.log(cities[index])
}
for (let city of cities){
    console.log(city)
}