import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dogs from "../Components/Dogs";
import Cats from "../Components/Cats";
import Header from "./Header";

export default function Router() {
  return (
    <BrowserRouter>
      <Header rota1="Cachorro" rota2="Gato" />
      <Routes>
        <Route path="/dog" element={<Dogs />} />
        <Route path="/cat" element={<Cats />} />
      </Routes>
    </BrowserRouter>
  );
}
