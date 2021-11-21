import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const TarefaCard = (props) => {
  const tarefa = props.data;

  return (
    <Link to={`/view/${tarefa._id}`} className="col LinkStyle">
      <div className="card shadow colorCard">
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center">
            {tarefa.titulo}
          </h5>
          <p>
            Status:<span className="d-flex">{tarefa.status}</span>
          </p>
          <p>
            Prioridade:<span className="d-flex">{tarefa.prioridade}</span>
          </p>
          <p className="card-text">Clique aqui para Descrição</p>
        </div>
      </div>
    </Link>
  );
};

export default TarefaCard;
