import React from "react";
import CongratulationsImage from "../../../assets/images/image160.png";

const Success = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white  rounded-md text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Congratulations!
      </h2>

      <img
        src={CongratulationsImage}
        alt="Congratulations"
        className="mx-auto mb-6 w-full max-w-[350px]"
      />

      <button
        type="submit"
        className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition"
      >
        Continue
      </button>
    </div>
  );
};

export default Success;
