import Link from "next/link";
import styled from 'styled-components';

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-around;
    padding-left: 15px;
    padding-right: 20px;
    padding-top: 0px;
`;

const NavLink = styled.a`
    color: white;
    font-size: 17px;
    width: 100px;
    cursor: pointer;
    text-align: center;
`;

function Navbar() {
  return (
    <NavContainer>
      <Link href="/"><NavLink>Home</NavLink></Link>
      <Link href="/about"><NavLink>About</NavLink></Link>
      <Link href="/shows"><NavLink>Events</NavLink></Link>
      <Link href="/music"><NavLink>Listen</NavLink></Link>
      <Link href="/connect"><NavLink>Community</NavLink></Link>
    </NavContainer>
  )
}

export default Navbar


