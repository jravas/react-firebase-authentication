import React from "react";
import Search from "@/main/components/Search";
import { Logo } from "@/main/components/Logo";
import { SharedLinks } from "./SharedLinks";

export const NavigationUser = () => (
  <nav className="main-navigation">
    <Logo />
    <div className="main-navigation__search">
      <div className="main-navigation__search__item">
        <Search />
      </div>
    </div>
    <SharedLinks />
  </nav>
);
