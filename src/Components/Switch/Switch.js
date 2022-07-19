import { useState } from "react";
import "./Switch.scss";

const Switch = (props) => {
  const [active, setActive] = useState(props.active);
  const updateCheckbox = () => setActive(!active);

  return (
    <div className="switch">
      <div className="switch__label" id={props.label} aria-hidden="true">
        {props.label}
      </div>
      <div
        className={`switch__toogle-wrapper ${active ? "checked" : null}`}
        onClick={() => setActive((prevActive) => !prevActive)}
      >
        <div
          role="checkbox"
          aria-checked={active}
          aria-labelledby={props.label}
          className={`switch__toggle ${active ? "checked" : null}`}
        >
          {active}
        </div>
        <div className={`switch__inside-text ${active ? "checked" : null}`}>
          {active ? "ON" : "OFF"}
        </div>
        <input
          className="switch__input"
          aria-labelledby="switch-label"
          aria-hidden="true"
          type="checkbox"
          checked={active}
          onChange={updateCheckbox}
        />
      </div>
    </div>
  );
};

export default Switch;
