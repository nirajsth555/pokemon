import { useDispatch, useSelector } from "react-redux";
import { IPokemonTeamState } from "../store/team/state";
import { TRootState } from "../store/reducers";
import { addPokemonTeam } from "../store/team/action";
import { IPokemon } from "../types";
import { useMaxTeamLimitModal } from "./useMaxTeamLimitModal";

export function usePokemonTeam() {
    const dispatch = useDispatch();
    const { displayModal } = useMaxTeamLimitModal();
    const { data: pokemonTeam }: IPokemonTeamState = useSelector((state: TRootState) => state.team);

    const addPokemonToTeam = (pokemon: IPokemon) => {
        let currentPokemonTeam = [...pokemonTeam];

        const alreadyInTeam = currentPokemonTeam?.some((item) => item.name === pokemon?.name);
        if (alreadyInTeam) {
            currentPokemonTeam = currentPokemonTeam.filter(item => item.name !== pokemon?.name);
            dispatch(addPokemonTeam(currentPokemonTeam));
        } else {
            if (currentPokemonTeam.length === 6) {
                displayModal();
                return;
            }
            currentPokemonTeam.push(pokemon);
        }
        // if (currentPokemonTeam.length === 6) {
        //     displayModal();
        //     return;
        // }
        dispatch(addPokemonTeam(currentPokemonTeam));
    }

    const checkPokemonIsInTeam = (pokemonName: string) => {
        return pokemonTeam?.some((item: IPokemon) => item.name === pokemonName)
    }

    return {
        addPokemonToTeam,
        checkPokemonIsInTeam,
        pokemonTeam
    }
}