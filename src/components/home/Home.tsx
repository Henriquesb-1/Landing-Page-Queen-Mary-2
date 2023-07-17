import qm2Video from "../../assets/video/qm2.mp4";

import "./home.css";

export default function HomeTemplate() {
    return (
        <div className="site-presentation">
            <div className="site-presentation-descricao">
                <h1>
                    RMS
                    <br />
                    Queen Mary 2
                </h1>

                <p>
                    Embarque agora para conhecer um pouco das características, história e instalações desse magnífico e
                    único trânsatlantico
                </p>
            </div>

            <div className="site-presentation-video">
                <video autoPlay={true} muted={true}>
                    <source src={qm2Video} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}