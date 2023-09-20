import { useDispatch, useSelector } from "react-redux";
import { IPokemonTeamState } from "../store/team/state";
import { TRootState } from "../store/reducers";
import { addPokemonTeam } from "../store/team/action";

export function usePokemonTeam() {
    const dispatch = useDispatch();
    const { data: pokemonTeam }: IPokemonTeamState = useSelector((state: TRootState) => state.team);

    const addPokemonToTeam = (pokemon: any) => {
        let currentPokemonTeam = [...pokemonTeam];
        const alreadyInTeam = currentPokemonTeam?.some((item) => item.name === pokemon?.name);
        if (alreadyInTeam) {
            currentPokemonTeam = currentPokemonTeam.filter(item => item.name !== pokemon?.name);
        } else {
            currentPokemonTeam.push(pokemon);
        }
        dispatch(addPokemonTeam(currentPokemonTeam));
    }

    const checkPokemonIsInTeam = (pokemonName: string) => {
        return pokemonTeam?.some((item: any) => item.name === pokemonName)
    }

    return {
        addPokemonToTeam,
        checkPokemonIsInTeam,
        pokemonTeam
    }
}