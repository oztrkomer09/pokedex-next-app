const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemons = async () => {
    const response = await fetch(`${POKEMON_API}?limit=10`);
    const data = await response.json();
    return data;
};

export const getPokemon = async (name) => {
    const response = await fetch(`${POKEMON_API}${name}`);
    const data = await response.json();
    return data;
}