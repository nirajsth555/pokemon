/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Pokeball from "../assets/images/pokeball.png";
import { getPokemonDetailByName as pokemonDetail } from "../services/pokemon";
import { IPokemon } from "../types";

export function usePokemonDetail() {
    const [detail, setDetail] = useState<IPokemon>();

    const [pokemonImage, setPokemonImage] = useState(Pokeball);
    const [pokemonType, setPokemonType] = useState<any>("");
    const [pokemonTypeList, setPokemonTypeList] = useState<any>([]);

    const getPokemonDetailByName = async (pokemonName: string) => {
        try {
            const { data } = await pokemonDetail(pokemonName);
            setDetail(data);
            return data;
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        setPokemonImage(detail?.sprites?.other?.["official-artwork"]?.front_shiny || Pokeball);
        setPokemonType(detail?.types?.[0]?.type?.name);
        setPokemonTypeList(detail?.types);
    }, [detail])

    return {
        getPokemonDetailByName,
        pokemonImage,
        pokemonType,
        pokemonTypeList,
        detail
    }
}