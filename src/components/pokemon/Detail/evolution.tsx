import { GenerationListType } from "../../../types";
import BackIcon from "../../icons/back";

interface EvolutionType {
    ImageUrl: string;
    name: string;
    evolutionInfo: GenerationListType[];
}

export default function Evolution({ ImageUrl, name, evolutionInfo }: EvolutionType) {
    return (
        <>
            <div className="evolution">
                <div className="evolution-card">
                    <img src={ImageUrl} alt={name} />
                </div>
                <BackIcon />
                {evolutionInfo.length > 0 &&
                    evolutionInfo.map((item, index) => (
                        <>
                            <div className="evolution-card">
                                <img src={item.url} alt={evolutionInfo[index].name} />
                            </div>
                            {evolutionInfo.length - 2 === index && <BackIcon />}
                        </>
                    ))}
            </div>
        </>
    )
}