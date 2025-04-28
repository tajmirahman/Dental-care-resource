import React from 'react';

const Register = () => {
    return (
        <div className="w-[70%] mx-auto mt-6 border-2 border-red-200 p-6">
  <form className="flex flex-col items-center space-y-4">
    <div className="w-full flex flex-col items-center gap-1">
      <label className="text-center">Name</label>
      <input type="text" name="text" className="input input-bordered w-full" required />
    </div>
    <div className="w-full flex flex-col items-center gap-1">
      <label className="text-center">Photo Url</label>
      <input type="text" name="photo" className="input input-bordered w-full" required />
    </div>
    <div className="w-full flex flex-col items-center gap-1">
      <label className="text-center">Email</label>
      <input type="email" name="email" className="input input-bordered w-full" required />
    </div>
    <div className="w-full flex flex-col items-center gap-1">
      <label className="text-center">Password</label>
      <input type="password" name="password" className="input input-bordered w-full" required />
    </div>
    <div className="w-full flex flex-col items-center gap-1">
      <label className="text-center">Confirm Password</label>
      <input type="password" name="conPassword" className="input input-bordered w-full" required />
    </div>
    <div>
      <button className="btn btn-primary mt-2">Submit</button>
    </div>
  </form>
</div>

    );
};

export default Register;