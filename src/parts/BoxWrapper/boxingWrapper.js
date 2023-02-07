import React from "react";
import "./style.scss";
import Button from "../../Element/Button";
import "../../assets/scss/_colorVariables.scss";
import SearchIcon from "../../assets/image/icon/search_24px.svg";
import ChatBpx from "./chatWrapper";
import groupChat from "../../Json/groupChat.json";

export default function boxingWrapper() {
  return (
    <div className="wrapper-box width:734px; height:732px;">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div
          className="container-fluid"
          style={{ marginTop: 24, marginRight: 32, marginLeft: 32, padding: 0 }}
        >
          <div className="input-group">
            <input
              className="form-control border-end-0"
              type="search"
              placeholder="     Search"
              aria-label="Search"
              style={{ height: 32 }}
            />
            <span className="input-group-text" style={{ height: 32 }}>
              <Button className="btn btn-outline-0" type="submit">
                <img
                  width="12px"
                  height="12px"
                  className="color-black"
                  src={SearchIcon}
                  alt="ic-search"
                />
              </Button>
            </span>
          </div>
        </div>
      </nav>

      <section className="spacing-sm">
        <ChatBpx data={groupChat.groupChats} />
      </section>
    </div>
  );
}
