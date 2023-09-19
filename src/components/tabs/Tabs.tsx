import TabTitle from "./TabTitle";

export default function Tabs() {
    return (
        <div className="tabs">
            Select Generations
            <div className="tab">
                <TabTitle />
                <TabTitle />
                <TabTitle />
                <TabTitle />
            </div>

            <div className="tab-content">
                Here is the content
            </div>

        </div>
    )
}