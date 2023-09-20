interface LoaderType {
    size: "sm" | "md" | "lg";
}

export default function Loader({ size = "md" }: LoaderType) {
    return (
        <div className="flex justify-center items-center">
            <div className={`loader loader-${size}`} />
            <h1>Loading</h1>
        </div>
    )
}