import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${props => props.disabled ? "#BAC6CB" : "#83DBEB"};
  color: #0A2B44;
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 0.6875rem;
  font-weight: bold;
  padding: 0.3125rem;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;

const Button = (props) => {
  return (
    <StyledButton type="button" disabled={props.disabled} aria-disabled={props.disabled}>
      {props.text}
    </StyledButton>
  );
};

export default Button;