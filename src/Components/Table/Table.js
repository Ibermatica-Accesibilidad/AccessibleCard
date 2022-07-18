import styled from "styled-components";
import "./Table.scss";
import { ReactComponent as ShoppingIcon } from './../../Assets/Images/icons-shop.svg';
import { ReactComponent as HealthIcon } from './../../Assets/Images/icons-health.svg';
import { ReactComponent as HomeIcon } from './../../Assets/Images/icons-home.svg';
import { ReactComponent as TravelIcon } from './../../Assets/Images/icons-travel.svg';

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
      }
    }
  }

  tbody {
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
`;

const Table = () => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Fecha y categoria</th>
          <th className="txt-align-left">Descripción</th>
          <th></th>
          <th className="flex txt-align-right">Importe y situación</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="flex column txt-align-center">
            <div aria-hidden="true">
              <ShoppingIcon width="35" />
            </div>
            05 jul.
          </th>
          <td className="txt-align-left">Descripción de movimiento de una o dos lineas según sea necesario.</td>
          <td>Aplazada</td>
          <td className="flex column txt-align-right">
            <span>- 1.000,00€</span>
            <span>Pte. de liquidar</span>
          </td>
        </tr>
        <tr>
          <th className="flex column txt-align-center">
            <div aria-hidden="true">
              <TravelIcon width="35" />
            </div>
            03 oct.
          </th>
          <td className="txt-align-left">Descripción de movimiento de una o dos lineas según sea necesario.</td>
          <td>Aplazar compra</td>
          <td className="flex column txt-align-right">
            <span>500,00€</span>
            <span>Autorizado</span>
          </td>
        </tr>
        <tr>
          <th className="flex column txt-align-center">
            <div aria-hidden="true">
              <HomeIcon width="35" />
            </div>
            05 jul.
          </th>
          <td className="txt-align-left">Descripción de movimiento de una o dos lineas según sea necesario.</td>
          <td></td>
          <td className="flex column txt-align-right">
            <span>- 400,00€</span>
            <span>Liquidado</span>
          </td>
        </tr>
        <tr>
          <th className="flex column txt-align-center">
            <div aria-hidden="true">
              <ShoppingIcon width="35" />
            </div>
            05 jul.
          </th>
          <td className="txt-align-left">Descripción de movimiento de una o dos lineas según sea necesario.</td>
          <td></td>
          <td className="flex column txt-align-right">
            <span>- 400,00€</span>
            <span>Liquidado</span>
          </td>
        </tr>
        <tr>
          <th className="flex column txt-align-center">
            <div aria-hidden="true">
              <ShoppingIcon width="35" />
            </div>
            05 jul.
          </th>
          <td className="txt-align-left">Descripción de movimiento de una o dos lineas según sea necesario.</td>
          <td></td>
          <td className="flex column txt-align-right">
            <span>- 400,00€</span>
            <span>Liquidado</span>
          </td>
        </tr>
      </tbody>
    </StyledTable>
  );
};

export default Table;
