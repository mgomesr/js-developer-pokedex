const pokemonList = document.getElementById('pokemonList');
const loadFirstGeneration = document.getElementById('loadFirstGeneration');
const loadSecondGeneration = document.getElementById('loadSecondGeneration');
const loadThirdGeneration = document.getElementById('loadThirdGeneration');
const loadFourthGeneration = document.getElementById('loadFourthGeneration');
const backToTop = document.getElementById('backToTop');

function chooseGeneration(){
    loadFirstGeneration.classList.add('standardButton');
    loadSecondGeneration.classList.add('standardButton');
    loadThirdGeneration.classList.add('standardButton');
    loadFourthGeneration.classList.add('standardButton');
}

function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit)
        .then((pokemons = []) => {
            const newHTML = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="details">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}"/>
                </div>
            </li>`

            ).join('');
            pokemonList.innerHTML += newHTML;
        });
}

loadPokemonItems(0, 151);

loadFirstGeneration.addEventListener('click', () => {
    pokemonList.innerHTML = '';
    loadPokemonItems(0, 151);
    chooseGeneration();
    loadFirstGeneration.classList.remove('standardButton');
    loadFirstGeneration.classList.add('focusButton');    
});

loadSecondGeneration.addEventListener('click', () => {
    pokemonList.innerHTML = '';
    loadPokemonItems(151, 100);
    chooseGeneration();
    loadSecondGeneration.classList.remove('standardButton');
    loadSecondGeneration.classList.add('focusButton');
});

loadThirdGeneration.addEventListener('click', () => {
    pokemonList.innerHTML = '';
    loadPokemonItems(251, 135);
    chooseGeneration();
    loadThirdGeneration.classList.remove('standardButton');
    loadThirdGeneration.classList.add('focusButton');
});

loadFourthGeneration.addEventListener('click', () => {
    pokemonList.innerHTML = '';
    loadPokemonItems(386, 107);
    chooseGeneration();
    loadFourthGeneration.classList.remove('standardButton');
    loadFourthGeneration.classList.add('focusButton');
});

backToTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
})