import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="molduradiv">
                <br />
                <div className="card border-success text-center mb-3">
                    <div className="card-header"><h1>Ola, pequeno gafanhoto!</h1></div>
                    <div className="card-body">
                        <p>
                            Este site maravilhoso e perfeito, foi feito para você, um jovem sem conhecimento culinário.<br />
                            Aqui você pode encontrar aquela receita top, para conquistar aquele(a) gafanhoto(a).<br />
                            E não Apenas isto! aqui você que detém o conhecimento, pode também, nos auxiliar em retirar estes confrades da escuridão!
                        </p>
                    </div>
                </div>

                <div className="card border-success text-center mb-3">
                    <div className="card-header"><h1>Quem sou eu.</h1></div>
                    <div className="card-body">
                        <p>
                            Sou uma pessoa normal, entusiasta por culinária, assim como você, para isso,<br />
                            fiz este site para compartilharmos das receitas que tanto gostamos, para que você possa também provar estas gostosuras<br />
                            e caso queira, possa também contribuir para esta comunidade maravilhosa.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
