import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContextInfo } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [success, setSuccess] = useState();
  const { logIn } = useContext(AuthContextInfo);
  const navigate = useNavigate();

  // const from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pin = e.target.pin.value;
    const password = e.target.password.value;
    console.log(email, pin);

    setSuccess(" ");
    logIn(email, password).then((res) => {
      console.log(res);
      toast("user create successfully!");
      navigate("/");
    });
  };
  return (
    <div className="container mx-auto mt-10">
      <p className="text-2xl font-semibold text-center py-5">
        Please Login to your payment system
      </p>
      <div className="rounded-lg p-10 flex items-center justify-center">
        <form onSubmit={handleLogin}>
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
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Enter your password</span>
              </div>
              <input
                type="password"
                name="password"
                placeholder="Type password"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <button type="submit" className="btn btn-outline btn-primary mt-2">
            Login
          </button>
          <span>
            Don&apos;t Have an Account?{" "}
            <Link to="/signup" className="text-blue-600">
              SignUp
            </Link>
          </span>
        </form>
        {success && <p className="text-green-600">{success}</p>}
      </div>
    </div>
  );
};

export default Login;
