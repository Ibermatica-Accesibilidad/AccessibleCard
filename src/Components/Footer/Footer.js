import styled from 'styled-components';
import { ReactComponent as SolidarityCardIcon } from './../../Assets/Images/icons-solidarity-card.svg';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 2.5rem;
  margin-left: 0;
  width: 100%;
  height: 60px;
  background-color: #E9F5E7;
  bottom: 0;
  z-index: 10;
  position: fixed;
  width: 798px;

  p {
    margin-left: 1.25rem;
    font-size: 0.875rem;

    a {
      color: #17374E; // To avoid contrast accessibility issues.
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <SolidarityCardIcon/>
      <p>Ahora con Virtual Bank puedes <a href="solidarizar-tarjeta.html">solidarizar tu tarjeta</a></p>
    </StyledFooter>
  );
};

export default Footer;