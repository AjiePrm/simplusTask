import React from "react";
import "../../assets/scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../../Element/Button";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function TodoWrapper() {
  return (
    <div className="wrapper-box width:734px; height:732px;">
      <div
        style={{
          marginRight: 32,
          marginLeft: 32,
          paddingTop: 24,
        }}
      >
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div
              class="dropdown border col-2"
              style={{
                alignContent: "center",
                borderRadius: 5,
                marginLeft: 110,
              }}
            >
              <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ paddingRight: 40 }}
              >
                My Tasks
              </button>

              <ul
                class="dropdown-menu position-absolute"
                aria-labelledby="dropdownMenuButton1"
                style={{ paddingRight: 100 }}
              >
                <li className="border-bottom">
                  <button class="dropdown-item" href="#">
                    Personal Errands
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" href="#">
                    Urgent To-Do
                  </button>
                </li>
              </ul>
            </div>
            <div style={{ borderRadius: 5 }}>
              <Button className="btn btn-primary text-white">New Task</Button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
