export default function BaseStats() {
    return (
        <div className="about stats">
            <ul>
                <li>
                    <h6 className="title">
                        Attack
                    </h6>
                    <h6>
                        10
                        <div className="line">
                            <div
                                className="lines line-Red"
                                style={{ width: `50%` }}
                            />
                        </div>
                    </h6>
                </li>
            </ul>
        </div>
    )
}