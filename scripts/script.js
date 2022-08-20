const pokemonName = document.querySelector('.nomepokemon');
const pokemonNumber = document.querySelector('.numeropokemon');

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
}

renderPokemon('charizard')