import React from "react";
import Data from "./Data";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="portfolio__filters">
      <button
          className="portfolio__tab active__portfolio"
          onClick={() => setItem(Data)}
        >
          All
        </button>
        {menuItems.map((Val, id) => {
          return (
            <button
              className="portfolio__tab"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}

      </div>
    </>
  );
};

export default Buttons;
