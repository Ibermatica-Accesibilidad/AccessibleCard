import styled from "styled-components";
import ShoppingIcon from './../../Assets/Images/icons-shop.svg';
import HealthIcon from './../../Assets/Images/icons-health.svg';
import HomeIcon from './../../Assets/Images/icons-home.svg';
import TravelIcon from './../../Assets/Images/icons-travel.svg';
import Button from './../Button/Button';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  thead {
    background-color: #F1F4F4;
    height: 40px;
    color: #0A2B44;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;

    tr {

      th {
        padding: 0.625rem;
      }
    }
  }

  tbody {
    padding: 0 1.25rem;
    font-size: 0.875rem;

    tr {
      border-bottom: 1px solid #E3E9E9;

      th {
        padding: 0.625rem;
        color: #436374;
        font-weight: 500;
      }

      td {
        padding: 0.625rem;
      }
    }
  }

  svg {
    width: 35px;
    height: 35px;
  }
`;

const Table = () => {
  return (
    <StyledTable>
      <caption className="sr-only">Tabla de movimientos de su tarjeta bancaria</caption>
      <thead>
        <tr role="row">
          <th className="p-l-30 txt-align-center" role="columnheader" scope="col">Fecha y categoría</th>
          <th className="txt-align-left" role="columnheader" scope="col">Descripción</th>
          <th role="columnheader" scope="col"><span className="sr-only">Estado</span></th>
          <th className="p-r-30 txt-align-right" role="columnheader" scope="col">Importe y situación</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="flex column align-center txt-align-center p-l-30">
            <div className="m-b-5">
              <img src={ShoppingIcon} alt="Compras" />
            </div>
            <time dateTime="07-05">05 jul.</time>
          </td>
          <td className="txt-align-left">Descripción de movimiento de una o dos lineas según sea necesario.</td>
          <td className="flex right"><Button text="Aplazada" disabled={true} /></td>
          <td className="txt-align-right p-r-30">
            <div className="flex column">
              <span className="m-b-10 bold">-1.000,00€</span>
              <span>Pte. de liquidar</span>
            </div>
          </td>
        </tr>
        <tr>
          <td className="flex column txt-align-center p-l-30">
            <div className="m-b-5">
              <img src={TravelIcon} alt="Viajes" />
            </div>
            <time dateTime="10-03">03 oct.</time>
          </td>
          <td className="txt-align-left">Descripción de movimiento de una o dos lineas según sea necesario.</td>
          <td className="flex right"><Button text="Aplazar compra" /></td>
          <td className="txt-align-right p-r-30">
            <div className="flex column">
              <span className="m-b-10 bold">500,00€</span>
              <span>Autorizado</span>
            </div>
          </td>
        </tr>
        <tr>
          <td className="flex column txt-align-center p-l-30">
            <div className="m-b-5">
              <img src={HomeIcon} alt="Hogar" />
            </div>
            05 jul.
          </td>
          <td className="txt-align-left">Descripción de movimiento de una o dos lineas según sea necesario.</td>
          <td></td>
          <td className="txt-align-right p-r-30">
            <div className="flex column">
              <span className="m-b-10 bold">-400,00€</span>
              <span>Liquidado</span>
            </div>
          </td>
        </tr>
        <tr>
          <td className="flex column txt-align-center p-l-30">
            <div className="m-b-5">
              <img src={HealthIcon} alt="Salud" />
            </div>
            05 jul.
          </td>
          <td className="txt-align-left">Descripción de movimiento de una o dos lineas según sea necesario.</td>
          <td></td>
          <td className="txt-align-right p-r-30">
            <div className="flex column">
              <span className="m-b-10 bold">-400,00€</span>
              <span>Liquidado</span>
            </div>
          </td>
        </tr>
        <tr>
          <td className="flex column txt-align-center p-l-30">
            <div className="m-b-5">
              <img src={ShoppingIcon} alt="Compras" />
            </div>
            05 jul.
          </td>
          <td className="txt-align-left">Descripción de movimiento de una o dos lineas según sea necesario.</td>
          <td></td>
          <td className="v-center txt-align-right p-r-30">
            <div className="flex column">
              <span className="m-b-10 bold">-400,00€</span>
              <span>Liquidado</span>
            </div>
          </td>
        </tr>
      </tbody>
    </StyledTable>
  );
};

export default Table;
