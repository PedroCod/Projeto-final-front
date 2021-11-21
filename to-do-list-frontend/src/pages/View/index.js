import React, { useState, useEffect } from "react";
import "./View.css";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Api from "../../api/api";

const View = () => {
  const [tarefa, setTarefa] = useState({});
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const AbreModal = () => setOpen(true);

  const FechaModal = () => setOpen(false);

  useEffect(() => {
    getTarefaById();
  }, []);

  const { id } = useParams();
  console.log(id);
  const getTarefaById = async () => {
    const request = await Api.fetchGetById(id);
    const tarefa = await request.json();
    setTarefa(tarefa);
  };

  const handleDelete = async () => {
    const response = await Api.fetchDelete(id);
    const data = await response.json();
    if (data.message) {
      console.log("excluido", data.message);
      navigate("/");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="card w-50 my-5 CssCard">
        <h1 className="text-center my-4">
          <b>Nome: </b>
          {tarefa.titulo}
        </h1>
        <h4 className="text-center">
          <b>Prioridade: </b>
          {tarefa.prioridade}
        </h4>
        <h4 className="text-center">
          <b>Status: </b> {tarefa.status}
        </h4>
        <h4 className="text-center">
          <b>Prazo: </b>
          {tarefa.prazo}
        </h4>
        <p className="text-center">
          Data de criação: <span>{tarefa.dataCriacao}</span>
        </p>
        <h5 className="card-text">{tarefa.descricao}</h5>
        <div className="btn-group mt-3 ">
          <Link to={`/edit/${tarefa._id}`} className="btn btn-info">
            Editar
          </Link>
          <button className="btn btn-danger" onClick={AbreModal}>
            Excluir
          </button>
        </div>
      </div>
      <Modal open={open} onClose={FechaModal} center showCloseIcon={false}>
        <h2 className="my-4">Realmente deseja excluir essa tarefa?</h2>
        <div className="d-flex w-50 mx-auto justify-content-around">
          <button className="btn btn-danger mr-2" onClick={FechaModal}>
            Não!
          </button>
          <button className="btn btn-success" onClick={handleDelete}>
            Sim!
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default View;
