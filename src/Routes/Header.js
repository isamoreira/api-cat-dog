import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = ({ rota1, rota2 }) => {
  return (
    <div>
      <Nav>
        <h1>Adote um Pet</h1>
        <h2>Escolha qual pet você quer</h2>
        <ul>
          <li>
            <Link to="/dog">{rota1}</Link>
          </li>
          <li>
            <Link to="/cat">{rota2}</Link>
          </li>
        </ul>
      </Nav>
    </div>
  );
};

export default Header;
