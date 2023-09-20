import { useSelector } from 'react-redux';
import PokemonBallIcon from '../icons/pokemonBall';
import { useModal } from '../../hooks/useModal';
import PokemonTeam from '../team/team';
import { usePokemonTeam } from '../../hooks/usePokemonTeam';

export default function MyTeam() {
    const { showModal, displayModal, hideModal } = useModal();
    const { pokemonTeam } = usePokemonTeam();

    return (
        <>
            <div className="profile mr-4" onClick={displayModal}>
                <h4>My Team</h4>
                <div className="profile-team">
                    <PokemonBallIcon />
                    <div className='count'>{pokemonTeam?.length}</div>
                </div>
            </div>
            {showModal && <PokemonTeam onCloseClick={hideModal} />}
        </>
    )
}