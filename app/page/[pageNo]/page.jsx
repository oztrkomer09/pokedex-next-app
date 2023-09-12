import PokemonCard from "../../../components/PokemonCard";
import { getPokemons } from "../../API/pokemonAPI";
import Pagination from "@/components/Pagination";

export default async function Page({ params }) {
  const pokemons = await getPokemons(params.pageNo);

  return (
    <div className="bg-white w-full h-max flex flex-wrap justify-center items-center gap-2 p-12 relative">
      {pokemons.results.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
      <Pagination pageNo={Number(params.pageNo)} />
    </div>
  );
}
