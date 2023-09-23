import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import Table from './Table';
import Form from './Form';

class App extends Component {
  removerAluno = (index) => {
    const{alunos} = this.state
    this.setState(
      {
        alunos: alunos.filter((aluno,i) => {
          return i !== index
        })
      }
    )
  }

  handleSubmit = (alunoDisc) => {
    this.setState(
      {
        alunos: [...this.state.alunos,alunoDisc]
      })
  }


  state = {
    alunos: [/*
    {
      nome:'Dudu',
      turma:'Programação Web',
    },
    {
      nome:'Paty',
      turma:'Análise de Algoritmos',
    },
    {
      nome:'Joãozinho',
      turma:'Programação 00',
    },
    {
      nome:'Ju',
      turma:'Engenharia de Requisitos',
    },*/
  ]
}
  render(){

    const {alunos} = this.state
    return (
      <div className="container">
        <Table alunos = {alunos} 
               removerAluno = {this.removerAluno}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
      );
  }
}

export default App;
