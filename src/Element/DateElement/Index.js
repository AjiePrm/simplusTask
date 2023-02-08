import React from "react";
import * as locales from "react-date-range/dist/locale";
import { useState } from "react";
import { Calendar } from "react-date-range";
import "./style.scss";

export default function Index() {
  const nameMapper = {
    id: "Indonesian",

    ja: "Japanese",
  };
  const localeOptions = Object.keys(locales)
    .map((key) => ({
      value: key,
      label: `${key} - ${nameMapper[key] || ""}`,
    }))
    .filter((item) => nameMapper[item.value]);

  const [locale, setLocale] = React.useState("ja");
  const [date, setDate] = useState(null);
  return (
    <div className="wrapper-date">
      <div style={{ display: "flex", flexFlow: "column nowrap" }}>
        <select
          style={{ margin: "20px auto" }}
          onChange={(e) => setLocale(e.target.value)}
          value={locale}
        >
          {localeOptions.map((option, i) => (
            <option value={option.value} key={i}>
              {option.label}
            </option>
          ))}
        </select>
        <div>
          <Calendar
            onChange={(item) => setDate(item)}
            locale={locales[locale]}
            date={date}
          />
        </div>
      </div>
    </div>
  );
}
