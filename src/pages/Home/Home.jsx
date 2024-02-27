const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex gap-10 justify-center items-center">
        <div className="w-1/2">
          <div className="font-semibold text-4xl space-y-2">
            <p>
              Unlock Seamless Transactions with{" "}
              <span className="text-yellow-500"> Tranzy</span>{" "}
            </p>
            <p>Your Wallet&apos;s New Best Friend!</p>
            <p className="text-base ">
              Say goodbye to the hassle of carrying cash or fumbling through
              cards. <span className="text-yellow-500"> Tranzy</span> brings you the ultimate convenience, allowing you
              to make payments swiftly and securely with just a tap. Whether
              you&apos;re shopping online or in-store, sending money to friends, or
              splitting bills, SwiftPay streamlines your transactions, making
              every financial interaction effortless. Experience seamless
              transactions like never before - download SwiftPay today and
              redefine the way you pay!
            </p>
          </div>
        </div>
        <div className="w-[40rem]">
          <img src="https://i.ibb.co/tbrM5VK/4060173.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
