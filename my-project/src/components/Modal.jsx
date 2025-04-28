import React, { useContext } from 'react';
import { authContext } from './AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Modal = () => {

    const { user } = useContext(authContext);
    const navigate=useNavigate();


    const handleForm=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const phone=e.target.number.value;
        const appointmentDate=e.target.date.value;
        const address=e.target.address.value;

        const info={
            name,email,phone,appointmentDate,address
        }


        let saveData=[];
        const loadData=localStorage.getItem('appointments');
        if(loadData){
            saveData=JSON.parse(loadData);
        }
        saveData.push(info);
        localStorage.setItem('appointments',JSON.stringify(saveData));

        navigate('/appointment')
    }


    return (
        <div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-gray-200">
                    <form onSubmit={handleForm} className="space-y-3">
                        <div className="flex items-center gap-4">
                            <label className="w-32">Full Name</label>
                            <input type="text" name="name" value={user?.displayName} required className="input input-bordered flex-1" />
                        </div>
                        <div className="flex items-center gap-4">
                            <label className="w-32">Email</label>
                            <input type="email" name="email" value={user?.email} required className="input input-bordered flex-1" />
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