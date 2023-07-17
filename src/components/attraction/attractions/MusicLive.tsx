import musicLive from "../../../assets/imgs/attraction/musiclive.jpg";

import "./slideContent.css";

export default function MusicLive() {
    return (
        <div className="musicLive slide">
            <div className="attraction-image">
                <img src={musicLive} alt="Live music on board of queen mary 2" />
            </div>
            <div className="attraction-description">
                <h2> Música Ao Vivo </h2>
                <p>
                    A música ao vivo será uma assinatura inconfundível de cada momento em seu
                    navio.<br />
                    Possui talentosos músicos que criarão um ambiente atraente durante momentos
                    relaxantes e em grandes ocasiões sociais.<br />
                    O trio de cordas oferece uma recepção calorosa a bordo e um acompanhamento
                    melódico
                    para o chá da tarde.<br />
                    O pianista residente dá um tom elegante aos drinks do jantar à noite no
                    Commodore
                    Club, e você também encontrará harpistas e bandas contemporâneas em salas
                    públicas e
                    salões em todo o navio.
                </p>
            </div>
        </div>
    )
}