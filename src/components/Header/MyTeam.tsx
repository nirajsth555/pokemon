import PokemonBallIcon from '../icons/pokemonBall';

export default function MyTeam() {
    return (
        <div className="profile mr-4">
            <h4>My Team</h4>
            <div className="profile-team">
                <PokemonBallIcon />
                <div className='count'>0</div>
            </div>
        </div>
    )
}