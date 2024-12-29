function func2 (searchWord){
    return new Promise ((resolve, reject) => 
        {if (typeof searchWord ==='string'){
            setTimeout (()=> {
                resolve ('Search completed');
            }, 3000);
        } else {
            setTimeout (()=> {
                reject ('Search canceled');
            }, 500);
        }
        });
}

// func2(11)
// .then ((result)=> console.log (result))
// .catch ((e) => console.log(e))

// func2('name')
// .then ((result)=> console.log (result))
// .catch ((e) => console.log(e))

async function asyncfunc2 (searchWord){
    try {
        const result = await func2 (searchWord)
        console.log (result)
    } catch (e){
        console.log (e)
    }
}
//asyncfunc2 (123)
//asyncfunc2 ('name')

