import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css'
import Tabela from './Tabela.js'
import Formulario from './Formulario.js'

class App extends Component {

  state = {
    user: [
      {
        nome: 'Joao da Silva',
        email: 'joao@joaosilva.com.br',
        cpf: '26899337649',
        telefone: '4233335555'
      },
      {
        nome: 'Maria Antonieta',
        email: 'maria@mariaantonieta.com.br',
        cpf: '65138896180',
        telefone: '1255553333'
      },
      {
        nome: 'Luiz Souza',
        email: 'luiz@luizsouza.com.br',
        cpf: '32420496329',
        telefone: '1144446666'
      },
    ],

  };

  removeUser = index => {

    const { user } = this.state;

    this.setState(
      {
        user: user.filter((autor, posAtual) => {
          console.log(index, posAtual)
          return posAtual !== index;
        }),
      }
    );
  }

  escutadorDeSubmit = autor => {
    this.setState({ user: [...this.state.user, autor] })
  }

  render() {
    return (
      <Fragment>
      <img src='https://tinnova.com.br/wp-content/uploads/2021/05/logo_dark.png'/>
        <div className="container mb-10">
        <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
        <Tabela user={this.state.user} removeUser={this.removeUser} /><br/><br/><br/><br/><br/><br/>
        </div>

      </Fragment>
    );
  }

}

export default App;
