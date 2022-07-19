import './CardInfo.scss';
import styled from 'styled-components';
import CardIcon from './../Assets/Images/icons-card.svg';
import Switch from './../Components/Switch/Switch';
import ProgressBar from './../Components/ProgressBar/ProgressBar';
import Table from './../Components/Table/Table';

const CardDetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`

const CardCreditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 30px;
`

const CardTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  h2 {
    font-size: 1.125rem;
    flex-shrink: 0;
    margin: 5px 0;
  }
`

const CardControls = styled.div`
  display: flex;
`

const CardCredit = styled.div`
  width: 100%;
`

const CardInfo = () => {
  return (
    <section>
      <CardDetailsWrapper>
        <div className="cardinfo__icon-wraper">
          <img src={CardIcon} alt="" />
        </div>
        <CardCreditWrapper>
          <CardTitle>
            <h2>Virtual Credit Visa</h2>
            <CardControls>
              <Switch label="Tarjeta" active={true}/>
              <Switch label="Travel +" active={true}/>
            </CardControls>
          </CardTitle>
          <ProgressBar />
        </CardCreditWrapper>
      </CardDetailsWrapper>
      <Table />
    </section>
  );
};

export default CardInfo;