import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #17374E;
  color: #FFFFFF;
  height: 60px;
  width: 100%;
  padding: 0 30px;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const StyledH1 = styled.h1`
  color: #FFFFFF;
  margin: 0 20px 0 0;
`;

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  color: #FFFFFF;
  text-decoration: capitalize;
  list-style-type: none;
  font-size: 0.875rem;
  flex-shrink: 0;
`

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  color: #FFFFFF;
  list-style-type: none;
  justify-content: space-between;
  width: 100%;

  li {
    a {
      cursor: pointer;
      color: #FFFFFF;
      text-decoration: none;

      :hover {
        text-decoration: underline;
      }
    }
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledH1>Tus tarjetas de un vistazo</StyledH1>
      <StyledNavigation>
        <StyledUl>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Sobre nosotros</a></li>
          <li><a href="#">Ventajas</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#content">Saltar al contenido</a></li>
        </StyledUl>
      </StyledNavigation>
    </StyledHeader>
  );
};

export default Header;