import React from 'react';

const Modal = () => {
    return (
        <div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-gray-200">
                    <form action="">
                        <div className='space-x-4'>
                            <label >Full Name</label>
                            <input type="text" name='text' required />
                        </div>
                        <div className='space-x-4'>
                            <label >Full Name</label>
                            <input type="text" name='text' required />
                        </div>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;