import planetary from "../../../assets/imgs/attraction/planetarium-grande-media.jpg";

import "./slideContent.css";

export default function Planetary() {
    return (
        <div className="planetario slide">
            <div className="attraction-image">
                <img src={planetary} alt="Planetary on board of queen mary 2" />
            </div>
            <div className="attraction-description">
                <h2> Planetario </h2>
                <p>
                    Já imaginou estar viajando em dos últimos trânsatlanticos do mundo super luxuoso
                    e
                    ainda por cima ter a chance de visitar um planetario?<br />
                    Com o Queen Mary 2 você tem.<br />
                    Mais do que um planetário, o Illuminations é um luxuoso cinema 3D e um local de
                    música clássica. A cúpula do planetário fazem você mergulhar numa viagem épica
                    pelo
                    sistema solar, ensiná-lo a navegar pelas estrelas ou mostrar outros filmes de
                    ciência e história natural, com até quatro exibições em cada dia de mar.<br />
                    Com a cúpula retraída, o Illuminations exibe filmes 3D e shows e recitais
                    impressionantes.
                </p>
            </div>
        </div>
    )
}