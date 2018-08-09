import React from "react";
import { FooterNavigation } from "@/modules/navigation/components/FooterNavigation";

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-wrapper__styling-helper">
        <div className="footer-wrapper__styling-helper__inner footer-wrapper__styling-helper__inner--left" />
      </div>
      <FooterNavigation />
      <div className="footer-wrapper__styling-helper">
        <div className="footer-wrapper__styling-helper__inner footer-wrapper__styling-helper__inner--right" />
      </div>
    </footer>
  );
};
