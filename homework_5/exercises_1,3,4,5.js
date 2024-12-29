//zadaca 1
function printFunc (seconds){
    if (typeof seconds !== 'number'){
        console.log('Please enter number')
    } else if (seconds>9){
        console.log('Please enter one digit number')
    } else {
        setTimeout(()=> console.log('Coding is not that hard'), 1000*seconds)
    }
}
//printFunc (3)
//printFunc (10)
//printFunc ('ab')

// zadaca2 - reshena vo zasebni js files

// zadaca3
function checkNumber (number){
    return new Promise ((resolve, reject)=>{
        if (number %2 ===0){
            resolve ('the number is even')
        } else if (number %2 ===1)  {
            reject ('the number is odd')
        } else {
            reject ('invalid input')
        }
    })
}

function handleSuccess (message) {
    console.log(message)
}
function handleError (error) {
    console.log(error)
}

// checkNumber(17)
// .then((message) => handleSuccess(message))
// .catch((error) => handleError(error))

// checkNumber(6)
// .then((message) => handleSuccess(message))
// .catch((error) => handleError(error))

// checkNumber('bbb')
// .then((message) => handleSuccess(message))
// .catch((error) => handleError(error))


//zadaca 4

function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: "John Doe",
          age: 30,
          email: "john@example.com",
        })
      }, 2000)
    })
}

async function displayUserDetails (){
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error)  {
        console.log('error')
    }
}

//displayUserDetails()

//zadaca 5

function countdown (seconds){
    console.log(seconds);
    let timerId = setInterval (() => {
        seconds--;
        console.log(seconds);
        
        if (seconds === 0) {
            console.log ('countdown complete')
            clearInterval(timerId);
        }
    }, 1000);
}

//countdown(5)

