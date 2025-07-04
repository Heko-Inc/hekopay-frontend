import React from "react";

import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="fixed flex justify-between items-center bottom-[1rem] right-[2rem] left-[2rem]">
      <div>
        <Link
          to="/policy"
          className="block  text-sm text-gray-500 hover:underline"
        >
          Privacy Policy
        </Link>
      </div>
      <div>
        <Link
          to="/terms-conditions"
          className="block text-sm text-gray-500 hover:underline"
        >
          Terms and Conditions
        </Link>
      </div>
    </div>
  );
};

export default Terms;
