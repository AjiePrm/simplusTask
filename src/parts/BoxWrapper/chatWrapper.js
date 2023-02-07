import React from "react";
import GroupBack from "../../assets/image/element/grouped.svg";
import "../../assets/scss/style.scss";
import FormatDate from "../../utils/formatDate";

export default function chatWrapper({ data }) {
  return (
    <div
      className="grp-btn container-fluid"
      style={{ marginRight: 32, marginLeft: 32, padding: 0 }}
    >
      {data.map((item, index) => {
        return (
          <div className="grp-btn" style={{ marginTop: 24 }}>
            <div
              key={`groupChat-${index}`}
              className={`grp-btn-item col-11 ${
                index === 0 ? "" : " border-top"
              } ${index > 0 ? " marginBorder" : ""}`}
            >
              <figure>
                <img
                  width={51}
                  height={34}
                  src={GroupBack}
                  alt="group-placeholder"
                />
              </figure>
              <div
                className="Title"
                style={{ textAlign: "left", paddingLeft: 20 }}
              >
                <h2 className="text-title h5 mb-0">{item.name}</h2>
                <h2 className="h6 mb-0 fw-bold">
                  {item.members[index].name} :
                </h2>
                <p className="mb-0">{item.messages[index].text}</p>
              </div>
              <div>
                <p style={{ paddingLeft: 60, marginTop: 1 }}>
                  <FormatDate timestamp={item.messages[index].timestamp} />
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
