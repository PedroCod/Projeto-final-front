import React from "react";
import ListTarefas from "../../components/structure/ListTarefas";
import './Home.css'

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center h1">Pagina de tarefas</h1>
      <ListTarefas/>
    </div>
  );
};

export default Home;
