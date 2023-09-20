import { useState } from "react";
import Pokeball from "../assets/images/pokeball.png";
import { getPokemonDetailByName as pokemonDetail } from "../services/pokemon";

export function usePokemonDetail() {
    const [detail, setDetail] = useState<any>([]);

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
    const pokemonType = detail?.types?.[Math.floor(Math.random() * detail?.types?.length)]?.type?.name;
    const pokemonTypeList = detail?.types;

    return {
        getPokemonDetailByName,
        pokemonImage,
        pokemonType,
        pokemonTypeList,
        detail
    }
}