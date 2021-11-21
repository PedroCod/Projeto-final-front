import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Api from "../../api/api";
import './edit.css'

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [tarefa, setTarefa] = useState({
    titulo: "",
    descricao: "",
    status: "",
    prioridade: "",
    prazo: "",
  });

  useEffect(() => {
    getTarefaById();
  }, []);

  const getTarefaById = async () => {
    const request = await Api.fetchGetById(id);
    const tarefa = await request.json();
    setTarefa(tarefa);
  };

  const handleFieldsChange = (evento) => {
    const campos = { ...tarefa };

    campos[evento.target.name] = evento.target.value;

    console.log(campos);
    setTarefa(campos);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const request = await Api.fetchPut(tarefa, id);
    const data = await request.json();
    alert(data.message);
    navigate(`/view/${id}`);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row mt-4 justify-content-center">
          <h3 className="d-flex justify-content-center">Editar Tarefas</h3>
          <div className="col-8 ">
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="titulo"
                placeholder="Digite o nome da tarefa"
                value={tarefa.titulo}
                onChange={handleFieldsChange}
                required
              />
              <label htmlFor="titulo">Titulo</label>
            </div>
          </div>
          <div className="col-8 ">
            <div className="form-floating mb-2">
              <input
                type="text"
                name="descricao"
                className="form-control"
                id="descricao"
                placeholder="Digite a descrição da tarefa"
                value={tarefa.descricao}
                onChange={handleFieldsChange}
              />
              <label htmlFor="descricao">Descrição</label>
            </div>
          </div>
          <div className="col-8 ">
            <div className="form-floating mb-2">
              <select
                name="status"
                id="status"
                className="form-control"
                value={tarefa.status}
                onChange={handleFieldsChange}
              >
                <option value="Fazer">Fazer</option>
                <option value="Fazendo">Fazendo</option>
                <option value="Feito">Feito</option>
              </select>
              <label htmlFor="status">Status</label>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 ">
            <div className="form-floating mb-2">
              <select
                name="prioridade"
                id="prioridade"
                className="form-control"
                value={tarefa.prioridade}
                onChange={handleFieldsChange}
              >
                <option value="Baixa">Baixa</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
              </select>
              <label htmlFor="prioridade">Prioridade</label>
            </div>
          </div>
          <div className="col-8 ">
            <div className="form-floating mb-2">
              <input
                type="date"
                className="form-control"
                id="prazo"
                placeholder="Coloque o prazo para fazer"
                value={tarefa.prazo}
                onChange={handleFieldsChange}
              />
              <label htmlFor="prazo"> Prazo</label>
            </div>
          </div>
          <div className="col-8 "></div>
        </div>
        <div className="row justify-content-center">
          <div className="col">
            <div className="d-flex justify-content-center  gap-2 ">
              <button type="submit" className="btn btncss">
                Editar
              </button>
              <Link to={`/view/${tarefa._id}`}>
                <button type="button" className="btn btn-danger">
                  Cancelar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Edit;
