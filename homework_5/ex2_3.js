function func3 (searchParameters){
    return new Promise ((resolve, reject) => 
        {if (searchParameters.length===3){
            setTimeout (()=> {
                resolve ('Search completed');
            }, 3000);
        } else {
            reject ('Incomplete or not valid search parameters');
        }
        });
}

// func3(['Tom', 15])
// .then ((result)=> console.log (result))
// .catch ((e) => console.log(e))

func3(['Tom', 'Smith', 15])
.then ((result)=> console.log (result))
.catch ((e) => console.log(e))

async function asyncfunc3 (searchParameters){
    try {
        const result = await func3 (searchParameters)
        console.log (result)
    } catch (e){
        console.log (e)
    }
}
//asyncfunc3 (['Tom', 15])
//asyncfunc3 (['Tom', 'Smith', 15])

