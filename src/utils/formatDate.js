import React from "react";

const FormattedDate = ({ timestamp }) => {
  const date = new Date(timestamp);

  const formattedDate =
    date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }) +
    " " +
    date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });

  return <div>{formattedDate}</div>;
};

export default FormattedDate;
