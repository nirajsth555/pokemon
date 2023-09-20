/* eslint-disable @typescript-eslint/no-explicit-any */
interface AboutType {
    abilities: any;
    species: any;
    height: number;
    weight: number;
}

export default function About({ abilities, species, height, weight }: AboutType) {
    return (
        <div className="about">
            <ul>
                <li>
                    <h6 className="title">Species</h6>
                    <h6>{species.toString().replaceAll(",", ", ")}</h6>
                </li>
                <li>
                    <h6 className="title">Height</h6>
                    <h6>{height / 10} cm</h6>
                </li>
                <li>
                    <h6 className="title">Weight</h6>
                    <h6>{weight / 10} kg</h6>
                </li>
                <li>
                    <h6 className="title">Abilities</h6>
                    <h6>{abilities.toString().replaceAll(",", ", ")}</h6>
                </li>
            </ul>
        </div>
    )
}