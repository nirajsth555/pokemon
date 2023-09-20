import { ReactNode } from 'react';

type TTabContentProps = {
    content: ReactNode;
};

export default function TabContent({ content }: TTabContentProps) {
    return (
        <div className="tab-content">
            {content}
        </div>
    )
}