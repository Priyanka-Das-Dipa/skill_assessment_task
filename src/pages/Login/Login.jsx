import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mx-auto mt-10">
      <p className="text-2xl font-semibold text-center py-5">Please Login</p>
      <div className="border rounded-lg p-10 flex items-center justify-center">
        <form>
          <div className="space-y-1 ">
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
          </div>

          <button type="submit" className="btn btn-outline btn-primary mt-2">Login</button>
          <span>
            Don&apos;t Have an Account?{" "}
            <Link to="/signup" className="text-blue-600">
              SignUp
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
