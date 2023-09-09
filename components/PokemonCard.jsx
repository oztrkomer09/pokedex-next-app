import React from "react";
import Image from "next/image";

import { getPokemon } from "@/app/API/pokemonAPI";

const PokemonCard = async ({ pokemon }) => {
  const pokemonData = await getPokemon(pokemon.name);

  return (
    <div className="flex justify-center items-center border-2 border-black w-44 h-48">
      <Image
        alt={pokemon.name}
        src={pokemonData.sprites.front_default}
        width={100}
        height={100}
      />
    </div>
  );
};

export default PokemonCard;
