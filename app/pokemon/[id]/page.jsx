import { getPokemon } from "@/app/lib/pokemonAPI";
import PokemonDetails from "@/components/PokemonDetails";

const PokemonPage = async ({ params }) => {
  const pokemon = await getPokemon(params.id);

  return <PokemonDetails pokemon={pokemon} />;
};

export default PokemonPage;
