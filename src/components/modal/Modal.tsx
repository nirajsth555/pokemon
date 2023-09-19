export default function Modal({ children }: any) {

    return (
        <div className="modal-backdrop">
            <div className="modal fade">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        </div>

    )
}