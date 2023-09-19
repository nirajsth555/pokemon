export type TOption = {
    value: string,
    label: string
}

type TInputSelectProps = {
    label: string,
    option: TOption[],
    handleChange: (selectedOption: string) => void
}

export default function InputSelect({ label, option, handleChange }: TInputSelectProps) {
    return (
        <div className="form-group form-group-center">
            <label className="form-group-label" htmlFor="generations">{label}</label>
            <div className="mt-2">
                <select
                    onChange={
                        (event: React.ChangeEvent<HTMLSelectElement>) =>
                            handleChange(event.target.value)
                    }
                    className="form-group-control"
                >
                    {option.map((element: TOption, index: number) => (
                        <option key={index} value={element.value}>{element.label}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}