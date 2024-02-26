import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container mx-auto mt-10">
      <p className="text-2xl font-semibold text-center py-5">Please SignUp</p>
      <div className="mx-auto border rounded-lg py-10 flex items-center justify-center">
        <form>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Enter your name</span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Type your name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Enter your Email Address</span>
            </div>
            <input
              type="text"
              name="email"
              placeholder="Type your email"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Enter your 5 digit PIN</span>
            </div>
            <input
              type="number"
              name="pin"
              placeholder="Type PIN number"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Enter your Phone Number</span>
            </div>
            <input
              type="number"
              name="phone"
              placeholder="Type phone number"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Pick Account Type</span>
            </div>
            <select className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option >Agent</option>
              <option>User</option>
            </select>
          </label>
          <button type="submit" className="btn btn-outline btn-primary mt-2">SignUp</button>
          <span>
            Already Have an Account?
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
