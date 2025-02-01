class Animal {
    constructor(commonName, scientificName) {
        this.commonName = commonName
        this.scientificName = scientificName
    }

    printBasicFacts() {
        console.log(`This animal's common name is "${this.commonName}" and the scientific name is "${this.scientificName}".`)
    }

    printWeightFact(min, max) {
        console.log(`The weight of this animal ranges from ${min} pounds to ${max} pounds.`)
    }

    printLengthFact(min, max) {
        console.log(`The length of this animal ranges from ${min} feet to ${max} feet.`)
    }
}

class Dog extends Animal {
    constructor(commonName, scientificName, breed) {
        super(commonName, scientificName)
        this.breed = breed
    }

    printMainBreedCharacteristics(mainCharacteristics) {
        console.log(`The name of this breed is ${this.breed}. The ${this.breed} is a ${mainCharacteristics} dog.`)
    }
}

const arcticWolf = new Animal("Arctic Wolf", "Canis lupus arctos")
arcticWolf.printBasicFacts()
arcticWolf.printWeightFact(70, 175)
arcticWolf.printLengthFact(3.2, 5.9)

const goldenRetriever = new Dog("Dog", "Canis lupus familiaris", "Golden Retriever")
goldenRetriever.printBasicFacts()
goldenRetriever.printWeightFact(0.2, 344)
goldenRetriever.printLengthFact(0.3, 8)
goldenRetriever.printMainBreedCharacteristics("friendly, intelligent and devoted")