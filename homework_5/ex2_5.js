const annualData = [
    {
     quarter: 'Q1',
     completedProjects: 10,
     cancelledProjects: 3,
    },
    {
    quarter: 'Q2',
    completedProjects: 5,
    cancelledProjects: 7,
    },
    {
    quarter: 'Q3',
    completedProjects: 12,
    cancelledProjects: 0,
    },
    {
    quarter: 'Q4',
    completedProjects: 8,
    cancelledProjects: 5,
    }
]

function func5 (quarter){
    return new Promise ((resolve, reject) => 
        {if (quarter.slice(-1) < 5 && quarter.slice(-1)>0 && quarter.length===2){
            resolve (annualData[quarter.slice(-1)-1]);
        } else {
            reject ('Not valid input');
        }
        });
}

// func5('Q3')
// .then ((result)=> console.log (result))
// .catch ((e) => console.log(e))


// func5('Q3a')
// .then ((result)=> console.log (result))
// .catch ((e) => console.log(e))

async function asyncfunc5 (quarter){
    try {
        const result = await func5 (quarter)
        console.log (result)
    } catch (e){
        console.log (e)
    }
}
//asyncfunc5 ('Q4')
//asyncfunc5 ('Q11')

