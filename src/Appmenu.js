import React, { useState, useEffect } from "react";
import "./App.css";
import { itemsData } from "./Products/itemsData";


export default function Appmenu() {

  const [numero, setNumero] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setItems(itemsData);
      console.log(items);
    }, 2000);
  });

  const handleIncrement = () => {
    setNumero(numero + 1);
  };

  const handleDecrement = () => {
    setNumero(numero - 1);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
     
      {items.map((item, idx) => {
        return (
          <div key={idx}>
            <h2>
              {item.nombre} precio: {item.precio}
            </h2>
            <p>{numero}</p>
      <button onClick={handleIncrement}>INCREMENTAR</button>
      <button onClick={handleDecrement}>DECREMENTAR</button>
          </div>
        );
      })}
    </div>
  );
}

