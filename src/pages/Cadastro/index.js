import React from "react";
import Api from "../../api/api";
import { Link, useNavigate } from "react-router-dom";

const Cadastro = () => {
  const navigate = useNavigate();

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    console.log(evento.target);
    const titulo = evento.target.titulo.value;
    const descricao = evento.target.descricao.value;
    const prioridade = evento.target.prioridade.value;
    const status = evento.target.status.value;
    const prazo = evento.target.prazo.value;

    const tarefa = {
      titulo,
      descricao,
      prioridade,
      status,
      prazo,
    };

    const request = await Api.fetchPost(tarefa);
    if (request.status === 500) {
      alert("Erro No Servidor");
    }
    const result = await request.json();
    if (result.error) {
      alert(result.error);
    } else {
      alert(result.message);
      navigate("/");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row mt-4 justify-content-center">
          <h3 className="d-flex justify-content-center">
            Cadastro das Tarefas
          </h3>
          <div className="col-8 ">
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="titulo"
                placeholder="Digite o nome da tarefa"
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
              />
              <label htmlFor="descricao">Descrição</label>
            </div>
          </div>
          <div className="col-8 ">
            <div className="form-floating mb-2">
              <select name="status" id="status" className="form-control">
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
                placeholder="Digite a senioridade"
              />
              <label htmlFor="prazo"> Prazo</label>
            </div>
          </div>
          <div className="col-8 "></div>
        </div>
        <div className="row justify-content-center">
          <div className="col">
            <div className="d-flex justify-content-center  gap-2 ">
              <button className="btn btn-success " type="submit">
                Cadastrar
              </button>
              <Link to="/">
                <button className="btn btn-danger">Voltar</button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Cadastro;
