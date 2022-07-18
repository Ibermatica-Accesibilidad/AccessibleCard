import styled from "styled-components";
import "./Table.scss";
import ShoppingIcon from './../../Assets/Images/icons-shop.svg';
import HealthIcon from './../../Assets/Images/icons-health.svg';
import HomeIcon from './../../Assets/Images/icons-home.svg';
import TravelIcon from './../../Assets/Images/icons-travel.svg';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  thead {
    background-color: #F1F4F4;
    height: 40px;
    color: #0A2B44;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;

    tr {
      th {
        padding: 10px;
      }
    }
  }

  tbody {
    padding: 0 20px;

    tr {
      border-bottom: 1px solid #E3E9E9;

      th {
        padding: 10px;
      }

      td {
        padding: 10px;
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
      <caption className="hidden">Tabla de movimientos de su tarjeta bancaria</caption>
      <thead>
        <tr role="row">
          <th role="columnheader" scope="col">Fecha y categoría</th>
          <th className="txt-align-left" role="columnheader" scope="col">Descripción</th>
          <th role="columnheader" scope="col"></th>
          <th className="txt-align-right" role="columnheader" scope="col">Importe y situación</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="flex column txt-align-center">
            <div className="m-b-5">
              <img src={ShoppingIcon} alt="Compras" />
            </div>
            05 jul.
          </th>
          <td className="txt-align-left">Descripción de movimiento de una o dos lineas según sea necesario.</td>
          <td>Aplazada</td>
          <td className="txt-align-right">
            <div className="flex column">
              <span className="m-b-10">-1.000,00€</span>
              <span>Pte. de liquidar</span>
            </div>
          </td>
        </tr>
        <tr>
          <th className="flex column txt-align-center">
            <div className="m-b-5">
              <img src={TravelIcon} alt="Viajes" />
            </div>
            03 oct.
          </th>
          <td className="txt-align-left">Descripción de movimiento de una o dos lineas según sea necesario.</td>
          <td><button type="button">Aplazar compra</button></td>
          <td className="txt-align-right">
            <div className="flex column">
              <span className="m-b-10">500,00€</span>
              <span>Autorizado</span>
            </div>
          </td>
        </tr>
        <tr>
          <th className="flex column txt-align-center">
            <div className="m-b-5">
              <img src={HomeIcon} alt="Hogar" />
            </div>
            05 jul.
          </th>
          <td className="txt-align-left">Descripción de movimiento de una o dos lineas según sea necesario.</td>
          <td></td>
          <td className="txt-align-right">
            <div className="flex column">
              <span className="m-b-10">-400,00€</span>
              <span>Liquidado</span>
            </div>
          </td>
        </tr>
        <tr>
          <th className="flex column txt-align-center">
            <div className="m-b-5">
              <img src={HealthIcon} alt="Salud" />
            </div>
            05 jul.
          </th>
          <td className="txt-align-left">Descripción de movimiento de una o dos lineas según sea necesario.</td>
          <td></td>
          <td className="txt-align-right">
            <div className="flex column">
              <span className="m-b-10">-400,00€</span>
              <span>Liquidado</span>
            </div>
          </td>
        </tr>
        <tr>
          <th className="flex column txt-align-center">
            <div className="m-b-5">
              <img src={ShoppingIcon} alt="compras" />
            </div>
            05 jul.
          </th>
          <td className="txt-align-left">Descripción de movimiento de una o dos lineas según sea necesario.</td>
          <td></td>
          <td className="align-center txt-align-right">
            <div className="flex column">
              <span className="m-b-10">-400,00€</span>
              <span>Liquidado</span>
            </div>
          </td>
        </tr>
      </tbody>
    </StyledTable>
  );
};

export default Table;
