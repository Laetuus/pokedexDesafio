const pokemonName = document.querySelector('.nomepokemon');
const pokemonNumber = document.querySelector('.numeropokemon');
const pokemonImage = document.querySelector('.imagem_pokemon');
const pokemonType = document.querySelector('.tipopokemon')

const form = document.querySelector('.form');
const input = document.querySelector('#nomepokemon')
const botao1 = document.querySelector('#botao1');
const botao2 = document.querySelector('#botao2');

// Imagens de fundo
var imageIce = './assets/imagens/pokemon-ice.jpg';
var imageFire = './assets/imagens/pokemon-fire.jpg';
var imageLight = './assets/imagens/pokemon-light.jpg';
var imageDefault = './assets/imagens/fundonuvem.jpeg';

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    

    if (APIResponse.status == 200) {
        const data = await APIResponse.json();
    return data;
    }
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Procurando...';
    pokemonNumber.innerHTML = ''
    
    const data = await fetchPokemon(pokemon);

    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        pokemonType.innerHTML = data['types']['0']['type']['name'];
        if(pokemonType.innerHTML == "ice") {
           var corpo = window.document.body
           corpo.style.background = `url(${imageIce})`;

           
        };
        if(pokemonType.innerHTML == "fire") {
            var corpo = window.document.body
           corpo.style.background = `url(${imageFire})`;
            
        };
        if(pokemonType.innerHTML == "electric" || pokemonType.innerHTML == "bug" ){
            var corpo = window.document.body
            corpo.style.background = `url(${imageLight})`
        }

        if(pokemonType.innerHTML == "normal" || 
        pokemonType.innerHTML == "flying" ||
        pokemonType.innerHTML == "poison" ||
        pokemonType.innerHTML == "ground" ||
        pokemonType.innerHTML == "rock" ||
        pokemonType.innerHTML == "bug" ||
        pokemonType.innerHTML == "ghost" ||
        pokemonType.innerHTML == "steel"  ||
        pokemonType.innerHTML == "special"  ||
        pokemonType.innerHTML == "water"  ||
        pokemonType.innerHTML == "grass" ||
        pokemonType.innerHTML == "psychic" ||
        pokemonType.innerHTML == "dragon" ||
        pokemonType.innerHTML == "dark"  ||
        pokemonType.innerHTML == "fairy" ) {
            var corpo = window.document.body
            corpo.style.background = `url(${imageDefault})`
        }

        

        input.value = '';
        searchPokemon = data.id;
         ;
    } else {
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Not Found o(?????????)o';
         
    }

}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());  
});

botao1.addEventListener('click', () => {
    if(searchPokemon > 1){
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
    } 
});

botao2.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);

/* (pokemonType.innerHTML == "normal" || "flying" || "poison" || "ground" || "rock" || "bug" || "ghost" ||
"steel" || "special" || "water" || "grass" ||
"psychic" || "dragon" || "dark" || "fairy") */