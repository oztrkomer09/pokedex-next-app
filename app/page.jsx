import PokemonCard from "../components/PokemonCard";
import { getPokemons } from "./API/pokemonAPI";

export default async function Home() {
  const pokemons = await getPokemons();

  return (
    <div className="bg-white w-full h-full flex flex-wrap justify-center items-center gap-2">
      {pokemons.results.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}
