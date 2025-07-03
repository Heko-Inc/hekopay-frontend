import React, { useState } from "react";
import { Check } from "lucide-react";
import Navbar from "../../components/RegistrationComponents/Navbar/Navbar";

import BusinessAddress from "../../components/RegistrationComponents/BusinessAddress/BusinessAddress";
import BusinessDocs from "../../components/RegistrationComponents/BusinessDocs/BusinessDocs";
import AdditionalBusinessDetails from "../../components/RegistrationComponents/AdditionalBusinessDetails/AdditionalBusinessDetails";
import Success from "../../components/RegistrationComponents/Success/Success";

const steps = [
  { title: "Business Details" },
  { title: "ID Verification" },
  { title: "Address" },
  { title: "Additional Details" },
  { title: "Business Docs" },
  { title: "Success" },
];

const Registration = () => {
  const [activeStep, setActiveStep] = useState(2);

  const renderStepComponent = () => {
    switch (activeStep) {
      case 2:
        return <BusinessAddress />;
      case 3:
        return <AdditionalBusinessDetails />;
      case 4:
        return <BusinessDocs />;
      case 5:
        return <Success />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="flex justify-center mt-6 px-4">
        <div className="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-10 overflow-x-auto max-w-full p-4 bg-white rounded-md">
          {steps.map((step, index) => {
            const isDisabled = index === 0 || index === 1;

            return (
              <div
                key={index}
                onClick={() => {
                  if (!isDisabled) setActiveStep(index);
                }}
                className={`flex flex-col items-center text-center min-w-[80px] sm:min-w-[100px] ${
                  isDisabled ? "cursor-default" : "cursor-pointer"
                }`}
              >
                <div
                  className={`h-[40px] w-[40px] rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    index < activeStep
                      ? "border-purple-600 bg-purple-600"
                      : index === activeStep
                      ? "border-purple-600 bg-white"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {index < activeStep && (
                    <Check className="text-white w-5 h-5" />
                  )}
                  {index === activeStep && !isDisabled && (
                    <span className="text-sm text-purple-600 font-bold">
                      {index + 1}
                    </span>
                  )}
                </div>
                <span
                  className={`text-xs sm:text-sm mt-2 whitespace-nowrap ${
                    index === activeStep
                      ? "text-purple-600 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 px-4">{renderStepComponent()}</div>
    </div>
  );
};

export default Registration;
