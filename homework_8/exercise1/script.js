async function displayData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        const usersList = document.getElementById('users-list')
        data.forEach((user) => {
            const individualList = document.createElement('ul')
            individualList.classList.add('individual_list')
            usersList.appendChild(individualList)
            const name = document.createElement('li')
            name.textContent = `Name: ${user.name}`
            individualList.appendChild(name)
            name.classList.add('property')
            const phone = document.createElement('li')
            phone.textContent = `Phone number: ${user.phone}`
            individualList.appendChild(phone)
            phone.classList.add('property')
            const company = document.createElement('li')
            company.textContent = `Company name: ${user.company.name}`
            individualList.appendChild(company)
            company.classList.add('property')
        })
    }
    catch (error) {
        console.error('Error occurred!', error)
    }
}

displayData()