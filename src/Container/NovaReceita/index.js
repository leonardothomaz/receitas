import React, { Component } from 'react'
import Apis from '../../Service/Api.js'

export default class NovaReceita extends Component {
    constructor(props) {
        super(props)

        this.salvarReceita = this.salvarReceita.bind(this)
    }

    salvarReceita() {
        const NovoLivro = {
            email: this.refs.email.value,
            tipoReceita: this.refs.tipoReceita.value,
            modoPreparo: this.refs.modoPreparo.value,
            ingredientes: this.refs.ingrediente.value
        }
        let form = document.getElementById('formNovaReceita')
        if (form.checkValidity()) {

            Apis.saveReceita(NovoLivro).then(() => {
            })
        }

    }
    render() {
        return (
            <div className="molduradiv">
                <form id="formNovaReceita">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" ref="email" className="form-control" id="exampleFormControlInput1" required />
                    </div>
                    <div className="form-group">
                        <label>Receita</label>
                        <select ref="tipoReceita" className="form-control" id="tipoReceita">
                            <option value="1">Salgada</option>
                            <option value="2">Doce</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Modo de Preparo</label>
                        <textarea ref="modoPreparo" className="form-control" id="modoPreparo" rows="3" required></textarea>
                    </div>
                    <div className="form-group">
                        <label>Ingredientes</label>
                        <textarea ref="ingrediente" className="form-control" id="ingredientes" rows="3" required></textarea>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div clasNames="custom-file">
                                <input type="file" className="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
                                <label className="custom-file-label" for="inputGroupFile04">Selecione a Imagem </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <button onClick={this.salvarReceita} className="btn btn-outline-success btn-lg btn-block">Publicar Receita</button>
                    </div>
                </form>
            </div>
        )
    }
}
