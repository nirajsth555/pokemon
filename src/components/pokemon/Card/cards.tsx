import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "./card";
import { useState, useEffect } from "react";
import { TRootState } from "../../../store/reducers";
import { IPokemonState } from "../../../store/pokemons/state";
import { IPokemonTeamState } from "../../../store/team/state";
import { addPokemonTeam } from "../../../store/team/action";
import PokemonDetail from "../detail";
import { useModal } from "../../../hooks/useModal";

export default function PokemonCards() {
    const dispatch = useDispatch();
    const { showModal, hideModal, displayModal } = useModal();
    const [pokemonList, setPokemonList] = useState<any>([]);
    const [itemsPerPage, setItemsPerPage] = useState(8);

    const { data: pokemons, success }: IPokemonState = useSelector((state: TRootState) => state.pokemon);
    const { data: pokemonTeam }: IPokemonTeamState = useSelector((state: TRootState) => state.team);

    useEffect(() => {
        if (success && pokemons.length > 0) {
            const copyPokemons = [...pokemons];
            const newPokemonList = copyPokemons.slice(0, itemsPerPage);
            setPokemonList(newPokemonList)
        }
    }, [pokemons, success, itemsPerPage]);

    const handleShowMore = () => {
        const currentItemsPerPage = itemsPerPage;
        setItemsPerPage(currentItemsPerPage + 4);
    }

    const handleAddPokemonToTeam = (pokemon: any) => {
        let currentPokemonTeam = [...pokemonTeam];
        const alreadyInTeam = currentPokemonTeam?.some((item) => item.name === pokemon?.name);
        if (alreadyInTeam) {
            currentPokemonTeam = currentPokemonTeam.filter(item => item.name !== pokemon?.name);
        } else {
            currentPokemonTeam.push(pokemon);
        }
        dispatch(addPokemonTeam(currentPokemonTeam));
    }

    const checkIsInTeam = (pokemonName: string) => {
        return pokemonTeam?.some((item: any) => item.name === pokemonName)
    }

    const displayPokemonDetail = () => {
        displayModal();
    }

    return (
        <>
            {/* <div className="tabs"> */}
            <div className="mb-10">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {pokemonList?.map((element: any, index: number) => (
                        <PokemonCard
                            key={index}
                            pokemon={element}
                            handleAddTeam={handleAddPokemonToTeam}
                            handleCardClick={displayPokemonDetail}
                            isInTeam={checkIsInTeam(element?.name)}
                        />
                    ))}
                </div>
                <div className="text-center">
                    {pokemonList.length !== pokemons.length && <button onClick={handleShowMore}>
                        Show More
                    </button>}
                </div>
            </div>

            {showModal && <PokemonDetail handleClose={hideModal} />}
        </>
    )
}