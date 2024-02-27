const SendMoney = () => {
  const handleSendMoney = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const moneyAmount = e.target.moneyAmount.value;

    console.log(name, email, moneyAmount);
  };
  return (
    <div>
      <h1>Send Money From</h1>
      <div className="mx-auto rounded-lg py-10 flex items-center justify-center">
        <form onSubmit={handleSendMoney}>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Enter Agent name</span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Enter agent name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Enter Agent Email Address</span>
            </div>
            <input
              type="text"
              name="email"
              placeholder="Type agent email"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Enter Money Amount </span>
            </div>
            <input
              type="number"
              name="moneyAmount"
              placeholder="Enter Money Amount"
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <button type="submit" className="btn btn-outline btn-primary mt-5">
            Send Money
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendMoney;
