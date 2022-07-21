import './ProgressBar.scss';

const ProgressBar = (props) => {
  return (
    <div className="progress-bar flex column">
      <dl className="progress-bar__credit-limit flex row space-between">
        <dt>Límite de crédito</dt>
        <dd>{`${props.available},00€`}</dd>
      </dl>

      {/* <div className="progress-bar__bar m-b-10" aria-hidden="true">
        <div className="progress-bar__filled-percentage"></div>
      </div> */}

      <label className="sr-only" htmlFor="progress-bar" aria-hidden="true">Porcentage de crédito utilizado</label>
      <progress
        id="progress-bar"
        className="progress-bar__bar m-b-10"
        max={props.available}
        value={props.drawn}
        aria-valuemin="0"
        aria-valuemax={props.available}
        aria-valuenow={Math.round((props.drawn / props.available))}
      >
        {`${Math.round((props.drawn / props.available) * 100)}%`}
      </progress>

      <div className="progress-bar__credit-info flex row space-between">
        <dl className="flex column txt-align-left">
          <dt className="flex row align-center f-s-13 m-b-5">
            <div className="progress-bar__drawn m-r-5"></div>
            Dispuesto
          </dt>
          <dd className="f-s-14 bold">{`${props.drawn},00€`}</dd>
        </dl>

        <dl className="flex column txt-align-right">
          <dt className="flex row align-center f-s-13 m-b-5">
            <div className="progress-bar__available m-r-5"></div>
            Disponible
          </dt>
          <dd className="f-s-14 bold">{`${props.available},00€`}</dd>
        </dl>
      </div>
    </div>
  );
};

export default ProgressBar;
