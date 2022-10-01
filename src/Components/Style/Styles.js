import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        
    }

    body{
      display: flex;
      align-items: center;
    }

`;

export const Foto = styled.img`
  width: 20vw;
  height: 30vh;
  border-radius: 50%;
  margin-top: 2rem;
`;

export const Botao = styled.button`
  background-color: black;
  color: whitesmoke;
  padding: 0.5rem;
  border-radius: 10%;
  margin: 2rem;
`;

export const ContainerPets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
