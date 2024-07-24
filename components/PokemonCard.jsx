import React from "react";
import Image from "next/image";
import Link from "next/link";

import { getPokemon } from "@/app/lib/pokemonAPI";

const PokemonCard = async ({ pokemon }) => {
  const pokemonData = await getPokemon(pokemon.name);
  const colors = {
    normal: "#A8A77A",
    fighting: "#C22E28",
    flying: "#A98FF3",
    poison: "#A33EA1",
    ground: "#E2BF65",
    rock: "#B6A136",
    bug: "#A6B91A",
    ghost: "#735797",
    steel: "#B7B7CE",
    fire: "#EE8130",
    water: "#6390F0",
    grass: "#7AC74C",
    electric: "#F7D02C",
    psychic: "#F95587",
    ice: "#96D9D6",
    dragon: "#6F35FC",
    dark: "#705746",
    fairy: "#D685AD",
  };

  return (
    <Link href={`/pokemon/${pokemonData.id}`}>
      <div
        style={{ backgroundColor: colors[pokemonData.types[0].type.name] }}
        className={`flex flex-col rounded-md justify-center items-center shadow-lg gap-2 border-black w-52 h-52 hover:scale-105  transition-all`}
      >
        <Image
          alt={pokemon.name}
          src={pokemonData.sprites.other.home.front_default}
          width={130}
          height={130}
        />

        <p className="text-xl font-bold font-inter text-white">
          {pokemon.name}
        </p>
      </div>
    </Link>
  );
};

export default PokemonCard;
