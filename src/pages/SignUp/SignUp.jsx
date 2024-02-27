import { Link, useNavigate } from "react-router-dom";
// import auth from "../../firebase/firebase.config";
import { useContext, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContextInfo } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { signUp } = useContext(AuthContextInfo);
  const [success, setSuccess] = useState();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const pin = e.target.pin.value;
    const phone = e.target.phone.value;
    const nid = e.target.nid.value;
    const accountTypeSelect = e.target.accountType;
    const accountType =
      accountTypeSelect.options[accountTypeSelect.selectedIndex].value;
    console.log(name, email, pin, phone, accountType, password, nid);
    setSuccess(" ");

    const userInfo = {
      name,
      email,
      pin,
      phone,
      accountType,
      password,
      balance: 40,
    };

    signUp(email, password).then((res) => {
      if (res.user) {
        updateProfile(res.user, {
          displayName: name,
        })
          .then()
          .catch();
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
        });
        toast("user create successfully!");
        navigate("/");
      }
    });
  };
  return (
    <div className="container mx-auto mt-10">
      <p className="text-2xl font-semibold text-center py-5">
        Please SignUp to your payment system
      </p>
      <div className="mx-auto rounded-lg py-10 flex items-center justify-center">
        <form onSubmit={handleSignUp}>
          <div className="flex gap-10">
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
          </div>
          <div className="flex gap-10">
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
          </div>
          <div className="flex gap-10">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Pick Account Type</span>
            </div>
            <select name="accountType" className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>Agent</option>
              <option>User</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Enter NID</span>
            </div>
            <input
              type="number"
              name="nid"
              placeholder="Type password"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          </div>
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
          <button type="submit" className="btn btn-outline btn-primary mt-2">
            SignUp
          </button>
          <span>
            Already Have an Account?
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
        {success && <p className="text-green-600">{success}</p>}
      </div>
    </div>
  );
};

export default SignUp;
