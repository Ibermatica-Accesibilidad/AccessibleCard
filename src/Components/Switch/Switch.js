import { useState } from 'react';
import './Switch.scss';

const Switch = (props) => {
  const [active, setActive] = useState(props.active);

  return (
    <div className="switch">
        <div className="switch__label" id="switch-label" aria-hidden="true" data-id="text">{props.label}</div>
        <div className="switch__toogle-wrapper" onClick={() => setActive((prevActive) => !prevActive)}>
          <div className="switch__toggle">{active}</div>
          <div className="switch__inside-text" aria-hidden="true">{active ? 'ON' : 'OFF'}</div>
        </div>  
        <input className="switch__input" aria-labelledby="switch-label" role="switch" aria-checked={active} type="checkbox" />
    </div>
  );
};

export default Switch;