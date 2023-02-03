import React from "react";
import MainQuick from "../../assets/image/element/quicks-1.svg";
import ChatQuick from "../../assets/image/element/quicks-chat.svg";
import TodoQuick from "../../assets/image/element/quicks-todo.svg";
import "../../assets/scss/style.scss";
import Button from "../../Element/Button";
import "../../assets/scss/style.scss";
import Slide from "react-reveal/Fade";

export default function ListDropDown() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          {open ? (
            <div className="row col-auto">
              <Slide right>
                <div className="item-menu col-auto" style={{ marginRight: 24 }}>
                  <h1 className="h4 text-center">Task</h1>
                  <Button className="btn mb-3" zIndex={998}>
                    <img width="68" height="68" src={TodoQuick} alt="chat" />
                  </Button>
                </div>
              </Slide>
              <Slide right>
                <div className="item-menu col-auto" style={{ marginRight: 26 }}>
                  <h1 className="h4 text-center">Inbox</h1>
                  <Button className="btn mb-3 " zIndex={999}>
                    <img width="68" height="68" src={ChatQuick} alt="chat" />
                  </Button>
                </div>
              </Slide>
            </div>
          ) : null}
          <div
            className="col-auto ml-0"
            style={{ marginTop: 35, marginLeft: 0 }}
          >
            <Button onClick={handleOpen} className="btn big-blue">
              <img width="68" height="68" src={MainQuick} alt="manu" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
