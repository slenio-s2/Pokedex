const pokeconteiner = document.querySelector("#pokeconteiner");
const pokemonCount = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const mainTypes = Object.keys(colors);

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemonCount; i++) {
        await getPokemons(i)
    }
}


const getPokemons = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const resp = await fetch(url)
    const data = await resp.json()
    createpokemoncard(data)
}

const createpokemoncard = (poke) => {
    const card = document.createElement('div')
    card.classList.add("pokemon")

    const name = poke.name[1].toUpperCase() + poke.name.slice(1)
    const id = poke.id.toString().padstart(3, '0')

    const poketypes = poke.types.map(type => type.tupe.name)
    const type = mainTypes.find(type => poketypes.idexof(type) > -1)
    const color = colors[type]

    card.style.backgroundcolor = color

    const pokemoninnerHTML = `  <div class="imagemconteiner">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png" alt="${name}">
            </div>

            <div class="info">
                <span class="numero">#${id}</span>
                <h3 class="${name}">bulbasaur</h3>
                <smal class="tipo">${type}</smal>
            </div>`
    card.innerHTML = pokemoninnerHTML

    pokeconteiner.appendchild(card)

    
}
fetchPokemons()