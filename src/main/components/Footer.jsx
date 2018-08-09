import React from "react";
import { FooterNavigation } from "@/modules/navigation/components/FooterNavigation";

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-wrapper__styling-helper">
        <div className="footer-wrapper__styling-helper__inner" />
      </div>
      <FooterNavigation />
    </footer>
  );
};
