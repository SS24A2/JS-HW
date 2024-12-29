function func4 (docName){
    return new Promise ((resolve, reject) => 
        {if (docName.slice(0, 4) === 'Mile'){
            const docList1 = ['Milestone1 Report 2024', 'Milestone3 Report 2024', 'Milestone5 Report 2024', 'Milestone6 Report 2024']
            resolve (docList1)
        } else if (docName.slice(0, 7) === 'Project'){
            const docList2 = ['Project mapping 2024', 'Projects costs 2024', 'Projects decisions 2024', 'Projects changes 2024']
            resolve (docList2)
        } else if (docName.slice(0, 5) === 'Audit'){
            const docList3 = ['Audit internal 2024', 'Audit reports 2024', 'Audits preparation activities 2024', 'Audit timeline 2024']
            resolve (docList3)
        } else {
            reject ('No results');
        }
        });
}

// func4('Audit')
// .then ((result)=> console.log (result))
// .catch ((e) => console.log(e))

// func4('Millestone')
// .then ((result)=> console.log (result))
// .catch ((e) => console.log(e))

async function asyncfunc4 (docName){
    try {
        const result = await func4 (docName)
        console.log (result)
    } catch (e){
        console.log (e)
    }
}
//asyncfunc4 ('Millestone')
//asyncfunc4 ('Project overview')

