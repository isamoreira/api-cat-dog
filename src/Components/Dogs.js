import React, { useState } from "react";
import axios from "axios";
import * as S from "./Style/Styles";

const Dogs = () => {
  const [data, setData] = useState(null);

  const API = "https://dog.ceo/api/breeds/image/random";

  const DogsApi = () => {
    axios
      .get(API)
      .then((resposta) => {
        setData(resposta.data.message);
        console.log(data);
      })
      .catch((error) => {
        console.log("Desculpe aconteceu um erro na requisição", error);
      });
  };

  return (
    <S.ContainerPets>
      <h2>Clique no para conhecer nossos cachorrinhos para adoção</h2>
      <S.Botao
        onClick={() => {
          DogsApi();
        }}
      >
        Clique aqui
      </S.Botao>
      <S.Foto src={data} alt="nome" />
    </S.ContainerPets>
  );
};

export default Dogs;
