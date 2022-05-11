import React, { Component } from 'react'
import "./App.css"

class Formulario extends Component {

    constructor(props) {
        super(props)

        this.stateInicial = {
            nome: '',
            email: '',
            cpf: '',
            telefone: '',
        }

        this.state = this.stateInicial
    }

    escutadorDeInput = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    submitFormulario = () => {
        this.props.escutadorDeSubmit(this.state)
        this.setState(this.stateInicial)
    }

    render() {

        const { nome, email, cpf, telefone } = this.state

        return (
            <form>
              <h4>Formulário de cadastro</h4>
                <div className="input" >
                    <div className="input-field">
                        <label className="input-field" htmlFor="nome">Nome completo (sem abreviações)</label><br/>  
                        <input
                            className="validate"
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput}
                        />
                    </div>

                    <div className="input-field">
                        <label className="input-field" htmlFor="livro">Email</label><br/>
                        <input
                            className="validate"
                            id="email"
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.escutadorDeInput}
                        />

                    </div>

                    <div className="input-field">
                        <label className="input-field" htmlFor="preco">CPF</label><br/>
                        <input
                            className="validate"
                            id="cpf"
                            type="text"
                            name="cpf"
                            value={cpf}
                            onChange={this.escutadorDeInput}
                        />
                    </div>

                    <div className="input-field">
                        <label className="input-field" htmlFor="preco">Telefone</label><br/>
                        <input
                            className="validate"
                            id="telefone"
                            type="text"
                            name="telefone"
                            value={telefone}
                            onChange={this.escutadorDeInput}
                        />
                    </div>

                </div>




                <button type="button" onClick={this.submitFormulario} className="btnSalvar">Cadastrar</button><br/><br/><br/><br/><br/><br/>
            </form>
        )
    }
}

export default Formulario