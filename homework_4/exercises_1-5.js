//Zadaca 1
let books = [
    {title: "Book 1", author: "Author A", year: 2000},
    {title: "Book 2", author: "Author B", year: 2010},
    {title: "Book 3", author: "Author C", year: 2020},
]

books.forEach(book => console.log(book.title, book.author));
let bookPublishedAfter2000 = books.find((book) => book.year > 2000);
console.log(bookPublishedAfter2000)


//Zadaca 2 -a

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      postalCode: "10001",
    },
    hobbies: ["Reading", "Traveling", "Cooking"],
}

let additionalInfo = {
    email: "john.doe@gmail.com",
    phone: "929-445-2009",
    education: {
        degree:"Bachelor of Science",
        major:"Science, Technology, Engineering, and Math"
    },
}

let personInfo = {...person, ...additionalInfo}
console.log(personInfo)


//Zadaca 2 -b

const user = {
    id: 123,
    username: "jsmith",
    fullName: { firstName: "John", lastName: "Smith" },
    contact: { email: "john@example.com", phone: "555-555-5555" },
    addresses: [
      {
        type: "home",
        street: "123 Main Street",
        city: "New York",
        state: "NY",
        zip: "10001",
      },
      {
        type: "work",
        street: "456 Market Street",
        city: "San Francisco",
        state: "CA",
        zip: "94105",
      },
    ],
}

let homeStreet,homeCity,homeState,homeZip,workStreet,workCity,workState,workZip
let userDestr = {
    username,
    fullName: {firstName, lastName},
    contact: {email},
    addresses: [
      {
        street: homeStreet,
        city: homeCity,
        state: homeState,
        zip: homeZip,
      },
      {
        street: workStreet,
        city: workCity,
        state: workState,
        zip: workZip,
      },
    ],
} = user

console.log(`${username} | ${firstName} | ${lastName} | ${email}`)
console.log(`${homeStreet} | ${homeCity} | ${homeState} | ${homeZip}`)
console.log(`${workStreet} | ${workCity} | ${workState} | ${workZip}`)


//Zadaca 3

const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
]

// 3-a
let countriesLand = countries
    .filter(country => country.slice(-4) === 'land')
    .map(country => country.toUpperCase())

console.log(countriesLand)

//3 -b
let countriesIa = countries.filter(country => country.slice(-2) === 'ia' && country.length > 7)
console.log(countriesIa)


//Zadaca 4
let zooAnimals = [
    {
      id: "0938aa23-f153-4937-9f88-4858b24d6bce",
      name: "lions",
      popularity: 4,
      location: "NE",
      residents: [
        {
          name: "Zena",
          sex: "female",
          age: 12,
        },
        {
          name: "Maxwell",
          sex: "male",
          age: 15,
        },
        {
          name: "Faustino",
          sex: "male",
          age: 7,
        },
        {
          name: "Dee",
          sex: "female",
          age: 14,
        },
      ],
    },
    {
      id: "e8481c1d-42ea-4610-8e11-1752cfc05a46",
      name: "tigers",
      popularity: 5,
      location: "NW",
      residents: [
        {
          name: "Shu",
          sex: "female",
          age: 19,
        },
        {
          name: "Esther",
          sex: "female",
          age: 17,
        },
      ],
    },
    {
      id: "baa6e93a-f295-44e7-8f70-2bcdc6f6948d",
      name: "bears",
      popularity: 5,
      location: "NW",
      residents: [
        {
          name: "Hiram",
          sex: "male",
          age: 4,
        },
        {
          name: "Edwardo",
          sex: "male",
          age: 4,
        },
        {
          name: "Milan",
          sex: "male",
          age: 4,
        },
      ],
    },
    {
      id: "ef3778eb-2844-4c7c-b66c-f432073e1c6b",
      name: "penguins",
      popularity: 4,
      location: "SE",
      residents: [
        {
          name: "Joe",
          sex: "male",
          age: 10,
        },
        {
          name: "Tad",
          sex: "male",
          age: 12,
        },
        {
          name: "Keri",
          sex: "female",
          age: 2,
        },
        {
          name: "Nicholas",
          sex: "male",
          age: 2,
        },
      ],
    },
    {
      id: "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae",
      name: "otters",
      popularity: 4,
      location: "SE",
      residents: [
        {
          name: "Neville",
          sex: "male",
          age: 9,
        },
        {
          name: "Lloyd",
          sex: "male",
          age: 8,
        },
        {
          name: "Mercedes",
          sex: "female",
          age: 9,
        },
        {
          name: "Margherita",
          sex: "female",
          age: 10,
        },
      ],
    },
    {
      id: "89be95b3-47e4-4c5b-b687-1fabf2afa274",
      name: "frogs",
      popularity: 2,
      location: "SW",
      residents: [
        {
          name: "Cathey",
          sex: "female",
          age: 3,
        },
        {
          name: "Annice",
          sex: "female",
          age: 2,
        },
      ],
    },
    {
      id: "78460a91-f4da-4dea-a469-86fd2b8ccc84",
      name: "snakes",
      popularity: 3,
      location: "SW",
      residents: [
        {
          name: "Paulette",
          sex: "female",
          age: 5,
        },
        {
          name: "Bill",
          sex: "male",
          age: 6,
        },
      ],
    },
    {
      id: "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5",
      name: "elephants",
      popularity: 5,
      location: "NW",
      residents: [
        {
          name: "Ilana",
          sex: "female",
          age: 11,
        },
        {
          name: "Orval",
          sex: "male",
          age: 15,
        },
        {
          name: "Bea",
          sex: "female",
          age: 12,
        },
        {
          name: "Jefferson",
          sex: "male",
          age: 4,
        },
      ],
    },
    {
      id: "01422318-ca2d-46b8-b66c-3e9e188244ed",
      name: "giraffes",
      popularity: 4,
      location: "NE",
      residents: [
        {
          name: "Gracia",
          sex: "female",
          age: 11,
        },
        {
          name: "Antone",
          sex: "male",
          age: 9,
        },
        {
          name: "Vicky",
          sex: "female",
          age: 12,
        },
        {
          name: "Clay",
          sex: "male",
          age: 4,
        },
        {
          name: "Arron",
          sex: "male",
          age: 7,
        },
        {
          name: "Bernard",
          sex: "male",
          age: 6,
        },
      ],
    },
]
//4-a
let popularAnimals =zooAnimals.filter(animal => animal.popularity >4).map(animal => animal.name)
console.log(popularAnimals)

//4-b  
let elephants = zooAnimals.filter(animal => animal.name==='elephants').map(({residents}) => (residents))
let elephantsAge = elephants.flat().map(elephant => elephant.age).sort((a,b) => b-a)
let oldestElephant = elephants.flat().filter (elephant => elephant.age === elephantsAge[0])
let oldestElephantName = oldestElephant.map(elephant => elephant.name)
console.log(oldestElephantName)


//4-c
let penguins = zooAnimals.filter(animal => animal.name==='penguins').map(({residents}) => (residents))
let youngFemalePenguins = penguins.flat().filter (penguin => penguin.age < 10 && penguin.sex === 'female')
let youngFemalePenguinsName = youngFemalePenguins.map(penguin => penguin.name)
console.log(youngFemalePenguinsName)


//4-d
let animalsNamesNumChar = zooAnimals.map(a => a.name.length).sort((a,b) => b-a)
let animalsWithLongestName = zooAnimals.filter(animal => animal.name.length ===animalsNamesNumChar[0]).map(animal => animal.name)
console.log(animalsWithLongestName )

let animalsWithLongestNameAges = zooAnimals.filter(animal => animal.name.length ===animalsNamesNumChar[0]).map(({residents}) => (residents)).flat().map(animal => animal.age)
let sumAge = animalsWithLongestNameAges.reduce((acc, curr) => acc + curr, 0)
console.log(sumAge)

//4-e
let animalResidentsNumber = zooAnimals.map(animal => animal.residents.length).sort ((a,b) => a-b)  
let lowestNumberOfResidents = animalResidentsNumber [0]
let highestNumberOfResidents = animalResidentsNumber [animalResidentsNumber.length - 1]

let animalsWithLeastResidents = zooAnimals.filter(animal => animal.residents.length === lowestNumberOfResidents)
let animalsWithLeastResidentsName = animalsWithLeastResidents.map(animal => animal.name)
console.log(animalsWithLeastResidentsName)

let animalsWithMostResidents = zooAnimals.filter(animal => animal.residents.length === highestNumberOfResidents)
let animalsWithMostResidentsName = animalsWithMostResidents.map(animal => animal.name)
console.log(animalsWithMostResidentsName)

let allNames = zooAnimals.map(({residents}) => (residents)).flat().map(animal => animal.name)
console.log(allNames)

//5

function checkGrade (score) {
    score>=90 && score<=100 
        ? console.log("Grade:A")
    : score>=80 && score<=89
        ? console.log("Grade:B")
    : score>=70 && score<=79
        ? console.log("Grade:C")
    : score>=60 && score<=69
        ? console.log("Grade:D")
    : score>=0 && score<=59
        ? console.log("Grade:F")
    : score<0 || score>100
        ? console.log("Invalid score! Please enter a score between 0 and 100")
        : console.log("Invalid entry! Please enter a numerical value")
}

checkGrade(73)