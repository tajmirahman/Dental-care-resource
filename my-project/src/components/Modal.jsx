import React from 'react';

const Modal = () => {
    return (
        <div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-gray-200">
                    <form className="space-y-3">
                        <div className="flex items-center gap-4">
                            <label className="w-32">Full Name</label>
                            <input type="text" name="text" required className="input input-bordered flex-1" />
                        </div>
                        <div className="flex items-center gap-4">
                            <label className="w-32">Email</label>
                            <input type="email" name="email" required className="input input-bordered flex-1" />
                        </div>
                        <div className="flex items-center gap-4">
                            <label className="w-32">Phone</label>
                            <input type="text" name="number" required className="input input-bordered flex-1" />
                        </div>
                        <div className="flex items-center gap-4">
                            <label className="w-32">Appointment Date</label>
                            <input type="date" name="date" required className="input input-bordered flex-1" />
                        </div>
                        <div className="flex items-center gap-4">
                            <label className="w-32">Address</label>
                            <input type="text" name="address" required className="input input-bordered flex-1" />
                        </div>
                        <button className="btn btn-primary">Make Appointment</button>
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