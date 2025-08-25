import React from "react";
import { useEffect } from "react";
import VisitUs from "./VisitUs";
import PartnerDiscrip from "./PartnerDiscrip";

const VisitWithPartners = () => {
  useEffect(() => {
    window.scrollTo(0, 0);  
  }, []);

  return (
    <div className="space-y-16">
      <VisitUs />
      <PartnerDiscrip />
    </div>
  );
};

export default VisitWithPartners;
