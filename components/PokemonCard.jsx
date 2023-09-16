import React from "react";
import Image from "next/image";
import Link from "next/link";

import { getPokemon } from "@/app/API/pokemonAPI";

const PokemonCard = async ({ pokemon }) => {
  const pokemonData = await getPokemon(pokemon.name);

  return (
    <Link href={`/pokemon/${pokemonData.id}`}>
      <div className="flex flex-col justify-center items-center border-2 border-black w-52 h-52 bg-green-400 hover:scale-105 transition-all">
        <div className="bg-white">
          <Image
            alt={pokemon.name}
            src={pokemonData.sprites.other.home.front_default}
            width={120}
            height={120}
          />
        </div>
        <p className="text-xl font-bold">{pokemon.name}</p>
      </div>
    </Link>
  );
};

export default PokemonCard;
