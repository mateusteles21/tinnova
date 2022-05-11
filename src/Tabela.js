import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>CPF</th>
                <th>Telefone</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {

    const linhas = props.user.map( (linha, index) => {
        return(
            <tr key={index}>
                <td>{ linha.nome }</td>
                <td>{ linha.email }</td>
                <td>{ linha.cpf }</td>
                <td>{ linha.telefone }</td>
                <td><button onClick={ () => { props.removeUser(index) }} className="btnSalvar">Remover</button></td>
            </tr>
        );
    });

    return(
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends Component {

    render() {
        
        const{ user, removeUser } = this.props;
        //console.log(user);

        return (
            <table className="centered highlight">
                <TableHead />
                <TableBody user = { user } removeUser = {removeUser}/>
            </table>
        );
    }

}

export default Tabela;