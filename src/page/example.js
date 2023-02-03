import React, { Component } from "react";
import MenuList from "../parts/DropdownItem/ListDropDown";

export default class example extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <MenuList />
          </div>
        </div>
      </div>
    );
  }
}
