import React from "react";
import { BrowserRouter } from "react-router-dom";
import styles from './App.module.css';
import NavBar from "./components/NavBar/NavBar";
import AppRouter from "./Routes/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <NavBar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
