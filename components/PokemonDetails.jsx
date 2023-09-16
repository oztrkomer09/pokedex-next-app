import React from "react";
import Image from "next/image";

const PokemonDetails = ({ pokemon }) => {
  return (
    <div className="w-full h-full bg-white pb-4">
      <div className="flex  justify-center items-center">
        <Image
          src={pokemon.sprites.other.home.front_default}
          width={250}
          height={250}
        />
      </div>
      <div className="flex gap-y-2 flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-purple-800 mb-9">
          {pokemon.name.toUpperCase()}
        </h1>
        <div>
          <b>{pokemon.stats[0].stat.name.toUpperCase()} : </b>
          {pokemon.stats[0].base_stat}
        </div>
        <div>
          <b>{pokemon.stats[1].stat.name.toUpperCase()} : </b>
          {pokemon.stats[1].base_stat}
        </div>
        <div>
          <b>{pokemon.stats[2].stat.name.toUpperCase()} : </b>
          {pokemon.stats[2].base_stat}
        </div>
        <div>
          <b>{pokemon.stats[5].stat.name.toUpperCase()} : </b>
          {pokemon.stats[5].base_stat}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
