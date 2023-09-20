import BackIcon from "../icons/back";
import Modal from "../modal/Modal";
import PokemonCard from "../pokemon/Card/card";
import { usePokemonTeam } from "../../hooks/usePokemonTeam";

export default function PokemonTeam({ onCloseClick }: any) {
    const { pokemonTeam } = usePokemonTeam();

    return (
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
                                    isInTeam={true}
                                    key={index}
                                />
                            ))
                        }

                    </div>
                </div>
            </Modal>
        </div>
    )
}