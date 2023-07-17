import library from "../../../assets/imgs/attraction/qm2library-grande-media.jpg";

import "./slideContent.css";

export default function Library() {
    return (
        <div className="biblioteca slide">
            <div className="attraction-image">
                <img src={library} alt="Library on board of queen mary 2" />
            </div>
            <div className="attraction-description">
                <h2> Biblioteca </h2>
                <p>
                    Para muitos, uma boa leitura é uma parte essencial de umas férias relaxantes, e
                    não
                    há melhor coisa que ler um bom livro.<br />
                    O Queen Mary 2 possui grande variedade de títulos, e com um ambiente super
                    requintado.<br />
                    Então, basta encontrar um bom livro, puxar uma poltrona de couro e desfrutar de
                    uma
                    leitura relaxante enquanto navega..<br />
                    Você pode até querer entrar no Cunard Book Club, onde acontecem discussões
                    literárias com outros viajantes que são conduzidas pelo bibliotecário do navio.
                </p>
            </div>
        </div>
    )
}