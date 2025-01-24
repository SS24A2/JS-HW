const cards = document.getElementById('cards')

async function displayData() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        data.results.forEach((character) => {
            const card=document.createElement('div')
            card.classList.add('card')
            card.innerHTML=
            `<img src="${character.image}" alt="${character.name}">
            <div class="card-text">
                <p>Name:<span class="info">${character.name}</span></p>
                <p>Gender:<span class="info">${character.gender}</span></p>
                <p>Status:<span class="info">${character.status}</span></p>
                <p>Number of episodes:<span class="info">${character.episode.length}</span></p>
            </div>`
            if (character.status==='Alive'){
                card.classList.add('card-alive')
            } else if (character.status==='Dead'){
                card.classList.add('card-dead')
            }
            cards.appendChild(card)
        })
    }
    catch (error) {
        console.error('Error occurred!', error)
    }
}

displayData()




