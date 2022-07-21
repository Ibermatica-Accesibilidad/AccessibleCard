import './ProgressBar.scss';

const ProgressBar = (props) => {
  return (
    <div className="progress-bar flex column">
      <dl className="progress-bar__credit-limit flex row space-between">
        <dt>Límite de crédito</dt>
        <dd>1500,00€</dd>
      </dl>

      <div className="progress-bar__bar m-b-10" aria-hidden="true">
        <div className="progress-bar__filled-percentage"></div>
      </div>

      <div className="progress-bar__credit-info flex row space-between">
        <dl className="flex column txt-align-left">
          <dt className="flex row align-center f-s-13 m-b-5">
            <div className="progress-bar__drawn m-r-5"></div>
            Dispuesto
          </dt>
          <dd className="f-s-14 bold">500,00€</dd>
        </dl>

        <dl className="flex column txt-align-right">
          <dt className="flex row align-center f-s-13 m-b-5">
            <div className="progress-bar__available m-r-5"></div>
            Disponble
          </dt>
          <dd className="f-s-14 bold">1000,00€</dd>
        </dl>
      </div>
    </div>
  );
};

export default ProgressBar;
