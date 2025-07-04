import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";

import Policy from "../../components/PrivacyPolicy/Plolicy";

const PolicyDoc = () => {
  const navigate = useNavigate();

  return <Policy />;
};

export default PolicyDoc;
