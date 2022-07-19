import './ProgressBar.scss';

const ProgressBar = (props) => {

  return (
    <div className="progress-bar">
      <dl className="progress-bar__credit-limit">
        <dt>Límite de crédito</dt>
        <dd>1500,00€</dd>
      </dl>

      <div className="progress-bar__bar" aria-hidden="true">
        <div className="progress-bar__filled-percentage"></div>
      </div>

    </div>
  );
};

export default ProgressBar;
