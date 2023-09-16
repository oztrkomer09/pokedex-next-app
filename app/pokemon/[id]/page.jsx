import { getPokemon } from "@/app/API/pokemonAPI";
import PokemonDetails from "@/components/PokemonDetails";

const PokemonPage = async ({ params }) => {
  const pokemon = await getPokemon(params.id);

  return <PokemonDetails pokemon={pokemon} />;
};

export default PokemonPage;
