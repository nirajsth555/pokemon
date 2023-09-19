type TPokemonType = {
    type: string
}

export default function PokemonType({ type }: TPokemonType) {
    return (
        <div className="badge">
            {type}
        </div>
    )
}