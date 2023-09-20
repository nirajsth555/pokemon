import { useState } from "react";
import BackIcon from "../icons/back";
import Modal from "../modal/Modal";
import PokemonCard from "../pokemon/Card/card";
import { usePokemonTeam } from "../../hooks/usePokemonTeam";
import PokemonDetail from "../pokemon/detail";
import { useModal } from "../../hooks/useModal";
import { IPokemon } from "../../types";

type TPokemonTeamProps = {
    onCloseClick: () => void
}

export default function PokemonTeam({ onCloseClick }: TPokemonTeamProps) {
    const { pokemonTeam, checkPokemonIsInTeam, addPokemonToTeam } = usePokemonTeam();
    const { showModal, hideModal, displayModal } = useModal();

    const [selectedPokemon, setSelectedPokemon] = useState<IPokemon>();

    const displayPokemonDetail = (pokemonDetail: IPokemon) => {
        setSelectedPokemon(pokemonDetail);
        displayModal();
    }

    return (
        <>
            <div className="banner-modal">
                <Modal size="lg">
                    <div className="modal-header banner-modal">
                        <div className="icons">
                            <div className="icons" onClick={onCloseClick}>
                                <BackIcon />
                            </div>
                        </div>
                        <h3>My Pokemon Team</h3>
                        <div />
                    </div>
                    <div className="modal-body">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            {
                                pokemonTeam?.map((element, index: number) => (
                                    <PokemonCard
                                        pokemon={element}
                                        isInTeam={checkPokemonIsInTeam(element?.name)}
                                        key={index}
                                        handleCardClick={displayPokemonDetail}
                                        handleAddTeam={addPokemonToTeam}
                                    />
                                ))
                            }

                        </div>
                    </div>
                </Modal>
            </div>
            {showModal && <PokemonDetail handleClose={hideModal} pokemon={selectedPokemon} />}
        </>
    )
}