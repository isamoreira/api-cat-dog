import React, { useState } from "react";
import axios from "axios";
import * as S from "./Style/Styles";

const Cats = () => {
  const [data, setData] = useState([]);

  const API =
    "https://api.thecatapi.com/v1/images/search?api_key=live_3hv2DhP3LlQ2ZgDZScviEIEcjexx9HID3e490NrVllWDMs6SFV49SYCLHXUADRRE";

  const CatsApi = () => {
    axios
      .get(API)
      .then((resposta) => {
        setData(resposta.data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Desculpe aconteceu um erro na requisição", error);
      });
  };
  return (
    <S.ContainerPets>
      <h2>Conheça nossos lindos gatinhos diposniveis para adoção.</h2>

      <S.Botao
        onClick={() => {
          CatsApi();
        }}
      >
        Clique aqui
      </S.Botao>

      {data.map((item) => (
        <S.Foto src={item.url} alt="Cats" />
      ))}
    </S.ContainerPets>
  );
};

export default Cats;
