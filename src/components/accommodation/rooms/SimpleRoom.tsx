import simpleRoom from "../../../assets/imgs/accommodation/qm2simpleroom.jpg";

import "./rooms.css";

export default function SimpleRoom() {
    return (
        <div className="room">
            <div className="room-image">
                <img src={simpleRoom} alt="" />
            </div>

            <div className="qrtTitle">
                <h3 className="titulo-acomodacao" style={{ textAlign: "center" }}>
                    Brittania inside
                </h3>
            </div>
            <div className="qrtDescricao">
                <p style={{ textAlign: "center" }}>
                    Oferece ótimas acomodações, com muitos itens de conforto a bordo.
                    <br />
                    Quem embarcar em um desses quartos, terá direito a uma garrafa de
                    espumante como boas-vindas, TV via satélite, serviço de quarto gratuito
                    24 horas por dia, um mordomo pessoal e muitos outros itens.
                    <br />
                    É uma ótima opção para quem não disponibiliza de muito dinheiro e ainda
                    sim quer viajar com conforto.
                    <br />
                    Uma viajem de 117 dias ao redor do mundo a bordo deste quarto custa
                    $21.199,00 dólares, algo em torno de R$117 mil (Com os
                    <a href="#atracao">entreterimentos </a>
                    a bordo já inclusos).
                </p>
            </div>
        </div>
    )
}