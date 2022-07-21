import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  background-color: #17374E;
  color: #FFFFFF;
  width: 100%;
  height: 60px;
  padding: 0 2.5rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  h1 {
    color: #FFFFFF;
    margin: 0 1.25rem 0 0;
    font-size: 1.125rem;
  }
`;

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  color: #FFFFFF;
  list-style-type: none;
  font-size: 0.875rem;

  ul {
    display: flex;
    flex-direction: row;
    color: #FFFFFF;
    list-style-type: none;
    justify-content: space-between;
  
    li {
      margin-right: 0.9375rem;
      
      a {
        cursor: pointer;
        color: #FFFFFF;
        text-decoration: none;
  
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledNavigation>
        <ul>
          <li><a href="#main">Saltar al contenido</a></li>
          <li><a href="inicio.html">Inicio</a></li>
          <li><a href="contact.html">Contacto</a></li>
        </ul>
      </StyledNavigation>
      <h1>Virtual Bank - Tus tarjetas de un vistazo</h1>
    </StyledHeader>
  );
};

export default Header;