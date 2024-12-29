function func1 (result, reference){
    return new Promise ((resolve, reject) => 
        {if (result === undefined){
            reject ('Error obtained')
        } else if (result === reference){
            setTimeout (()=> { 
                resolve ('result equivalent to reference');
            }, 3000);  
        } else {
            setTimeout (()=> {
                resolve ('outlier result');
            }, 3000);
        };
        });
}

// func1(undefined, 50)
// .then ((result)=> console.log (result))
// .catch ((e)=> console.log (e))

// func1(49.6, 50)
// .then ((result)=> console.log (result))
// .catch ((e)=> console.log (e))


async function asyncfunc1 (result, reference){
    try {
        const outcome = await func1 (result, reference)
        console.log (outcome)
    } catch (e){
        console.log (e)
    }
}
//asyncfunc1 (undefined, 50)
//asyncfunc1 (50.0, 50)

