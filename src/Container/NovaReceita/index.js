import React, { Component } from 'react'
import Apis from '../../Service/Api.js'

export default class NovaReceita extends Component {
    constructor(props) {
        super(props)
        this.salvarReceita = this.salvarReceita.bind(this)
    }

    salvarReceita() {
        console.log(this.refs.imagem.value);

        let teste = btoa(this.refs.imagem.value);
        console.log(teste);
        const NovoLivro = {
            email: this.refs.email.value,
            tipoReceita: this.refs.tipoReceita.value,
            autor: this.refs.autor.value,
            prato: this.refs.prato.value,
            descricao: this.refs.descricao.value,
            modoPreparo: this.refs.modoPreparo.value,
            ingredientes: this.refs.ingrediente.value,
            imagem: btoa(this.refs.imagem.value)
        }
        let form = document.getElementById('formNovaReceita')
        if (form.checkValidity()) {

            Apis.saveReceita(NovoLivro).then(() => {
            })
        }

    }

    render() {
        return (
            <div className="molduradiv1">
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
                    <div className="row">
                        <div className="col">
                            <label>Autor</label>
                            <input ref="autor" type="text" className="form-control" required />
                        </div>
                        <div className="col">
                            <label>Nome do Prato</label>
                            <input ref="prato" type="text" className="form-control" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Descrição do Prato</label>
                        <textarea ref="descricao" className="form-control" id="descricao" rows="3" required></textarea>
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
                            <label className="custom-file-label">Selecione a Imagem </label>
                            <input ref="imagem" type="file" className="custom-file-input" accept=".jpg,.jpeg,.png" required />
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
