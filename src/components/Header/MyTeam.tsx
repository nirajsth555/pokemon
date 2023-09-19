import PokeBall from '../../assets/images/pokeball.svg';
export default function MyTeam() {
    return (
        <div className="profile">
            <h4>My Team</h4>
            <img src={PokeBall} />
            <div className="profile-team">0</div>
        </div>
    )
}