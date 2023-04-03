import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main";
import Master from "./master";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/master" element={<Master />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
