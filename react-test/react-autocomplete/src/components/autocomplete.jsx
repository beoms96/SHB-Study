import React from "react";

const Autocomplete = (props) => {
  return (
    <div className="autocomplete">
      {props.matchDataList.map((label, index) => {
        return (
          <div
            key={label.key}
            onClick={(e) => {
              props.autoCompleteOnClick(index);
            }}
          >
            {label.value}
          </div>
        );
      })}
    </div>
  );
};

export default Autocomplete;
