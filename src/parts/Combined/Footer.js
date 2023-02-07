import React from "react";
import DropDownMenu from "../DropdownItem/ListDropDown";
import "../../assets/scss/style.scss";

export default function Footer() {
  return (
    <footer>
      <div className="btn-menu ">
        <div className="row">
          <DropDownMenu />
        </div>
      </div>
    </footer>
  );
}
