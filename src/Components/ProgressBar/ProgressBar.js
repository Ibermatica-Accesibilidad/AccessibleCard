import './ProgressBar.scss';

const ProgressBar = (props) => {

  return (
    <div className="progress-bar flex column">
      <dl className="progress-bar__credit-limit flex row space-between">
        <dt>Límite de crédito</dt>
        <dd>1500,00€</dd>
      </dl>

      <div className="progress-bar__bar" aria-hidden="true">
        <div className="progress-bar__filled-percentage"></div>
      </div>

      <div className="progress-bar__credit-info flex row space-between">
        <dl className="flex column txt-align-left">
          <dt>Dispuesto</dt>
          <dd>500,00€</dd>
        </dl>

        <dl className="flex column txt-align-right">
          <dt>Disponble</dt>
          <dd>1000,00€</dd>
        </dl>
      </div>
    </div>
  );
};

export default ProgressBar;
