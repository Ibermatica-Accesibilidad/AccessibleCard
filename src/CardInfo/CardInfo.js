import './CardInfo.scss';
import styled from 'styled-components';
import CardIcon from './../Assets/Images/icons-card.svg';
import Switch from './../Components/Switch/Switch';
import ProgressBar from './../Components/ProgressBar/ProgressBar';
import Table from './../Components/Table/Table';

const CardDetailsWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 0 1.875rem;
  margin-bottom: 1.875rem;
`

const CardCreditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 1.875rem;
`

const CardTitle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.25rem;

  h2 {
    font-size: 1.125rem;
    flex-shrink: 0;
    margin: 5px 0;
  }
`

const CardInfo = () => {
  return (
    <>
      <CardDetailsWrapper>
        <div className="cardinfo__icon-wraper">
          <img src={CardIcon} alt="" />
        </div>
        <CardCreditWrapper>
          <CardTitle className="p-r-30">
            <h2>Virtual Credit Visa</h2>
            <div className="flex row">
              <Switch id="tarjeta" label="Tarjeta" active={true} class="m-r-10" />
              <Switch id="travelplus" label="Travel +" active={true} />
            </div>
          </CardTitle>
          <ProgressBar />
        </CardCreditWrapper>
      </CardDetailsWrapper>
      <Table />
    </>
  );
};

export default CardInfo;