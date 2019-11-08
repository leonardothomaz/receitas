import React, { Component } from 'react'
import imagem from '../Contato/leonardo.jpeg'
export default class Contato extends Component {

    render() {
        return (
            <div className="molduradiv">
                <br />
                <div className="card border-success mb-3">
                    <div className="card-header text-center font-weight-bold">Leonardo Thomaz Passarello da Rocha</div>
                    <div className="card-body">
                        <div className="text-center">
                            <img src={imagem} className="img" alt="..." />
                        </div>
                        <br />
                        <div className="text-center">
                            <h6>RA: 2003325</h6>
                            <h6>Francisco Beltrão, 85.603-750, PR</h6>
                            <h6>Engenharia de Software - UTFPR-DV, 5º Periodo.</h6>
                        </div>
                        <div className="text-center">
                            <a href={'https://www.linkedin.com/in/leonardo-thomaz-rocha/'} target="_blank">
                                <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                            <a className="paddingLeft text-dark" href={'https://github.com/leonardothomaz'} target="_blank">
                                <i className="fab fa-github fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
