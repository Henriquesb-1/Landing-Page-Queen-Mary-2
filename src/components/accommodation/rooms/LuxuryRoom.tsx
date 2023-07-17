import luxury from "../../../assets/imgs/accommodation/qm2luxurysuites.jpg";

import "./rooms.css";

export default function LuxuryRoom() {
    return (
        <div className="room">
            <div className="room-image">
                <img src={luxury} alt="" />
            </div>

            <div className="qrtTitle">
                <h3 className="titulo-acomodacao" style={{ textAlign: "center" }}>
                    Queen Suíte Grill
                </h3>
            </div>
            <div className="qrtDescricao">
                <p style={{ textAlign: "center" }}>
                    Oferece confortos dignos de hotel de luxo. Os viajantes que embarcarem
                    nesse quarto terão direito a diversos itens e regalias.
                    <br />
                    É oferecido champanhe na chegada a suíte, além de ter entrega de frutas
                    todos os dias, maquina de café, banheiro com banheira, mesa reservada no
                    restaurante, varanda privativa, embarque e desembarque prioritários e
                    muitos outros itens.
                    <br />
                    Sem duvidas, neste quarto você terá um hotel de luxo flutuante.
                    <br />
                    Para quem deseja passar 117 dias neste quarto viajando ao redor do
                    mundo, terá que desembolsar $ 86,999 dólares, algo em torno de R$ 481
                    mil. (Com os <a href="#atracao">entreterimentos </a> a bordo já
                    inclusos).
                </p>
            </div>
        </div>
    )
}