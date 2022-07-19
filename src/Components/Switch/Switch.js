import { useState } from "react";
import "./Switch.scss";

const Switch = (props) => {
  const [active, setActive] = useState(props.active);
  const updateCheckbox = () => setActive(!active);

  return (
    <div className="switch">
      <div className="switch__label" id={props.id} aria-hidden="true">
        {props.label}
      </div>
      <div
                  className={`switch__toogle-wrapper ${active ? "checked" : null}`}
        onClick={() => setActive((prevActive) => !prevActive)}
      >
        <div
          className={`switch__toggle ${active ? "checked" : null}`}
        >
          {active}
        </div>
        <div aria-hidden="true" className={`switch__inside-text ${active ? "checked" : null}`}>
          {active ? "ON" : "OFF"}
        </div>
        <input
          className="switch__input"
          aria-labelledby="switch-label"
                    type="checkbox"
          checked={active}
          onChange={updateCheckbox}
        />
      </div>
    </div>
  );
};

export default Switch;
