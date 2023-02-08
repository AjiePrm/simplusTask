import React, { useState } from "react";
import MainQuick from "../../assets/image/element/quicks-1.svg";
import DarkQuick from "../../assets/image/element/darkQuicks.svg";

import ChatQuick from "../../assets/image/element/quicks-chat.svg";
import TodoQuick from "../../assets/image/element/quicks-todo.svg";
import ChatQuickActive from "../../assets/image/element/quicks-chat-active.svg";
import TodoQuickActive from "../../assets/image/element/quicks-todo-active.svg";
import "../../assets/scss/style.scss";
import Button from "../../Element/Button";
import "../../assets/scss/style.scss";
import "./style.scss";

import InboxWrapper from "../BoxWrapper/boxingWrapper";
import TaskWrapper from "../TaskWrapper/TodoWrapper";
import Slide from "react-reveal/Fade";

export default function ListDropDown() {
  const [open, setOpen] = useState(false);
  const [inbox, setInbox] = useState(false);
  const [task, setTask] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    setInbox(false);
    setTask(false);
  };

  const handleInboxOpen = () => {
    setInbox(!inbox);
    setTask(false);
  };

  const handleTaskOpen = () => {
    setTask(!task);
    setInbox(false);
  };

  return (
    <div className="item">
      {inbox ? (
        <div className="inbox-range-wrapper">
          <Slide>
            <InboxWrapper />
          </Slide>
        </div>
      ) : null}

      {task ? (
        <div className="inbox-range-wrapper">
          <Slide>
            <TaskWrapper />
          </Slide>
        </div>
      ) : null}

      {open ? (
        <div
          className={`row-item${inbox ? "-active" : ""}${
            task ? "-reverse" : ""
          }`}
        >
          <Slide right>
            <div className="item-menu col-auto" style={{ marginRight: 24 }}>
              <h1 className="h4 text-center">Task</h1>

              {task ? (
                <Button onClick={handleOpen} className="btn mb-3">
                  <img
                    width="68"
                    height="68"
                    src={TodoQuickActive}
                    alt="chat"
                  />
                </Button>
              ) : (
                <Button onClick={handleTaskOpen} className="btn mb-3">
                  <img width="68" height="68" src={TodoQuick} alt="chat" />
                </Button>
              )}
            </div>
          </Slide>
          <Slide right>
            <div className="item-menu col-auto" style={{ marginRight: 26 }}>
              <h1 className="h4 text-center">Inbox</h1>
              {inbox ? (
                <Button onClick={handleOpen} className="btn mb-3 ">
                  <img
                    width="60"
                    height="60"
                    src={ChatQuickActive}
                    alt="chat"
                  />
                </Button>
              ) : (
                <Button onClick={handleInboxOpen} className="btn mb-3 ">
                  <img width="68" height="68" src={ChatQuick} alt="chat" />
                </Button>
              )}
            </div>
          </Slide>
        </div>
      ) : (
        false
      )}
      <div
        className="col-6 ml-0"
        style={{ marginTop: 35, marginLeft: 0, paddingRight: 20 }}
      >
        {inbox || task ? (
          <Button onClick={handleOpen} className="btn col-6 item-menu">
            <img width="62" height="62" src={DarkQuick} alt="manu" />
          </Button>
        ) : (
          <Button onClick={handleOpen} className="btn col-6 item-menu">
            <img width="68" height="68" src={MainQuick} alt="manu" />
          </Button>
        )}
      </div>
    </div>
  );
}
