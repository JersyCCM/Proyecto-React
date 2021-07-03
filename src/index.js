import { StrictMode } from "react";
import ReactDOM from 'react-dom';
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import {Productos} from './Products/products'
import './App.css';
import Appmenu from "./Appmenu";

const rootElement = document.getElementById("app");
ReactDOM.render(
  <StrictMode>
    <Navbar />
    <ItemListContainer/>
    <Productos/>
    <Appmenu/>
  </StrictMode>,
  rootElement
);

