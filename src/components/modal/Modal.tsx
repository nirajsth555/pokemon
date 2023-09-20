export default function Modal({ children }: any) {

    return (
        <div className="modal-backdrop">
            <div className="modal fade">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        </div>

    )
}