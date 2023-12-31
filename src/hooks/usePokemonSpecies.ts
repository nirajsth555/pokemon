import { useState } from "react";
import axios from "axios";
import { getPokemonSpeciesByName as pokemonSpecies } from "../services/pokemon";
import { usePokemonDetail } from "./usePokemonDetail";
import { EvolvesTo, GenerationListType } from "../types";

export function usePokemonSpecies() {
    const { getPokemonDetailByName } = usePokemonDetail();
    const [pokemonEvoInfo, setPokemonEvoInfo] = useState<GenerationListType[]>([]);

    const getPokemonSpeciesByName = async (speciesName: string) => {
        try {
            const { data } = await pokemonSpecies(speciesName);
            return data;
        } catch (err) {
            console.error(err);
        }
    };

    const evolutionData = (evolve: EvolvesTo[], evoList: GenerationListType[]) => {
        evolve.forEach((evo) => {
            evoList.push(evo?.species);
            if (evo?.evolves_to.length > 0) {
                evolutionData(evo?.evolves_to, evoList);
            }
        });
    };

    const getPokemonEvolutionChain = async (evolutionChainURL: string) => {
        try {
            const { data } = await axios.get(evolutionChainURL);
            const evoList: GenerationListType[] = [];
            const tempPokemonInfo: GenerationListType[] = [];

            evolutionData(data?.chain.evolves_to, evoList);

            await Promise.all(
                evoList.map(async (item) => {
                    const pokemonDetail = await getPokemonDetailByName(item.name);
                    const { sprites, species } = pokemonDetail;
                    const Info = {
                        name: species.name as string,
                        url: sprites?.other?.["official-artwork"]?.front_default as string,
                    };
                    tempPokemonInfo.push(Info);
                })
            );

            setPokemonEvoInfo(tempPokemonInfo);
            return data;
        } catch (err) {
            console.error(err);
        }
    };

    return {
        getPokemonSpeciesByName,
        getPokemonEvolutionChain,
        pokemonEvoInfo,
    };
}
