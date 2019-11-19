import React, { Component } from 'react'
import Apis from '../../../Service/Api';

export default class Visualizar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Receitas: []
        }

    }
    componentWillMount() {
        Apis.loadReceitasById(this.props.match.params.receitaId).then((res) => {

            this.setState({ Receitas: res.data[0] })
            console.log(this.state.Receitas)
        })
    }

    render() {
        return (
            <div className="moldura">
                <br />
                <div className="card shadow-lg w-75 p-3 mb-5 bg-white rounded">
                    <img src={this.state.Receitas.imagem} className="card-img-top mx-auto d-block img-fluid" />
                    <div className="card-body">
                        <h3 className="card-title text-center">{this.state.Receitas.prato}</h3>
                        <h6 className="card-text text-center">{this.state.Receitas.descricao}</h6>
                        <div className="card border-primary mb-3">
                            <div className="card-header text-center">Ingredientes</div>
                            <div className="card-body text-primary">
                                <p className="card-text">{this.state.Receitas.ingredientes}</p>
                            </div>
                            <br />
                        </div>
                        <div className="card border-success mb-3">
                            <div className="card-header text-center">Modo de Preparo</div>
                            <div className="card-body text-success">
                                <p className="card-text">{this.state.Receitas.modoPreparo}</p>
                            </div>
                        </div>
                        <p className="card-text text-center"><small className="text-muted">Autor: {this.state.Receitas.autor} - {this.state.Receitas.email}</small></p>
                    </div>
                </div>
            </div>
        )
    }
}
