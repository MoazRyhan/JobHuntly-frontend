import React from "react";
import CTAImage from "../../../assets/images/CTA Section.png";     

function CTA() {
  return (
    <section className="w-full relative overflow-hidden">
      <img 
        src={CTAImage} 
        alt="Start posting jobs today" 
        className="w-full h-auto object-cover"
      />
    </section>
  );
}

export default CTA;