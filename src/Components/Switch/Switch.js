import { useState } from "react";
import "./Switch.scss";

const Switch = (props) => {

  const [isChecked, setIsChecked] = useState(props.active);

  const updateCheckbox = () => {
    setIsChecked(!isChecked);
  }

  return (
    <div className="switch">
      <div className="switch__label" id={props.id} aria-hidden="true">
        {props.label}
      </div>
      <div
        className={`switch__toogle-wrapper ${isChecked ? "checked" : null}`}
        onClick={() => setIsChecked((prevActive) => !prevActive)}
      >
        <div className={`switch__toggle ${isChecked ? "checked" : null}`}></div>
        <div
          aria-hidden="true"
          className={`switch__inside-text ${isChecked ? "checked" : null}`}
        >
          {isChecked ? "ON" : "OFF"}
        </div>
        <input
          className="switch__input"
          aria-labelledby="switch-label"
          type="checkbox"
          checked={isChecked}
          onChange={updateCheckbox}
        />
      </div>
    </div>
  );
};

export default Switch;
