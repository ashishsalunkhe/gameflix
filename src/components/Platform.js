import React, { useState, useEffect } from "react";

import "./style/Platform.scss";

const platforms = [
  {
    name: "browser",
    icon: "far fa-window-maximize",
    color: "#02c0e4",
  },
  {
    name: "PC",
    icon: "fab fa-windows",
    color: "#00A4EF",
  },
];

const Platform = ({ setPlatform, setRand }) => {
  const [selected, setSelected] = useState(null);

  const renderedPlatforms = platforms.map((platform, index) => {
    return (
      <div
        className={`platform__item ${
          platform.name.toLowerCase() === selected
            ? "platform__item--active"
            : ""
        }`}
        key={index}
        onClick={() => {
          setRand(false);
          setSelected(platform.name.toLowerCase());
        }}
      >
        {/* <i
          className={`platform__icon ${platform.icon}`}
          style={{ color: platform.color }}
        ></i> */}
        <p className="platform__name">{platform.name}</p>
      </div>
    );
  });

  useEffect(() => {
    setPlatform(selected);
  }, [selected]);

  return (
    <section className="platform">
      <div className="platform__wrapper">
        <h3 className="platform__title">
           platform
        </h3>
        <div className="platform__box">{renderedPlatforms}</div>
      </div>
    </section>
  );
};

export default Platform;
