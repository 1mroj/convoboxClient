import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import FacebookLoginComponent from "./LauchWhatsApp";
function Facebook() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [instanceId, setInstanceId] = useState(searchParams.get("instanceId"));
  return <FacebookLoginComponent instanceId={instanceId} />;
}

export default Facebook;
