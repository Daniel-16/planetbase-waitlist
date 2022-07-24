import React from "react";
import Navbar from "./Navbar";
import ThankYouImg from "../assets/images/thankYou.png";

const SuccessPage = () => {
  return (
    <div>
      <Navbar />
      <div className="conainer mx-auto mt-3">
        <div className="flex flex-col items-center md:px-6 md:flex-row">
          <div className="flex-col px-3">
            <h1 className="font-bold text-5xl animate-pulse">Thank You!</h1>
            <p>
              Thank you for joining the waitlist. We would let you know as soon
              as we launch.
            </p>
          </div>
          <img className="max-w-xs" src={ThankYouImg} alt="Thank You" />
        </div>
        {/* <div className=""> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default SuccessPage;
