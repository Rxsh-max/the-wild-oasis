import styled from "styled-components"
import Logout from "../features/authentication/Logout"


const StyledHeader = styled.header`
    background-color:grey ;
    padding : 1.2rem 4.8rem;
    border-bottom: 2px solid var(--color-black-100);

`

export default function Header() {
  return (
    <StyledHeader>
      <Logout/>
    </StyledHeader>
  )
}
