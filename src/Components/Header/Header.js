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
  padding: 0 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  h1 {
    color: #FFFFFF;
    margin: 0 20px 0 0;
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
      margin-right: 15px;
      
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
      <h1>Virtual Bank - Tus tarjetas de un vistazo</h1>
      <StyledNavigation>
        <ul>
          <li><a href="inicio.html">Inicio</a></li>
          <li><a href="contact.html">Contacto</a></li>
          <li><a href="#main">Saltar al contenido</a></li>
        </ul>
      </StyledNavigation>
    </StyledHeader>
  );
};

export default Header;