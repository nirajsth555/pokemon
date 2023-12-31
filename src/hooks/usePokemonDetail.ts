/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Pokeball from "../assets/images/pokeball.png";
import { getPokemonDetailByName as pokemonDetail } from "../services/pokemon";
import { IPokemon } from "../types";

export function usePokemonDetail() {
    const [detail, setDetail] = useState<IPokemon>();

    const getPokemonDetailByName = async (pokemonName: string) => {
        try {
            const { data } = await pokemonDetail(pokemonName);
            setDetail(data);
            return data;
        } catch (err) {
            console.log(err);
        }
    };

    const pokemonImage = detail?.sprites?.other?.["official-artwork"]?.front_shiny || Pokeball;
    const pokemonType = detail?.types?.[0]?.type?.name;
    const pokemonTypeList = detail?.types;

    return {
        getPokemonDetailByName,
        pokemonImage,
        pokemonType,
        pokemonTypeList,
        detail
    }
}